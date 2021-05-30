import axios from 'axios';
import { message } from 'antd';

let _TIMER = null;
const _REQUESTS = {};


class Api {
  _url = '/';
  _base_url = 'http://ec509419df2f.ngrok.io';
  _method = 'get';
  _params = {};
  _headers = {
    'version': 7,
  };

  get(url, params = {}) {
    this._url = url;
    this._method = 'get';
    this._params = params;
    return this;
  }

  post(url, params = {}) {
    this._url = url;
    this._method = 'post';
    this._params = params;
    return this;
  }

  delete(url, params = {}) {
    this._url = url;
    this._method = 'delete';
    this._params = params;
    return this;
  }

  upload(params, callback) {
    const headers = this._headers;
    headers['Content-Type'] = 'multipart/form-data';

    const form = new FormData();
    for (var param in params) {
      form.append(param, params[param]);
    }

    const config = {
      headers,
      onUploadProgress(progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        callback(percentCompleted);
      },
    };

    axios
      .post(this._base_url + this._url, form, config)
      .then((res) => {
        console.log('res', res);
        callback(100);
        // console.log(res);
      })
      .catch((err) => {
        callback(-1);
        console.log(err);
      });
  }

  params(params) {
    this._params = params;
    return this;
  }

  authHeader(id, token) {
    this._headers['auth-id'] = id;
    this._headers['auth-token'] = token;
  }

  testAuthHeader(id) {
    this._headers['auth-id'] = id;
  }

  header(version, section) {
    this._headers['api-version'] = version;
    this._headers['api-section'] = section;
  }

  setToken(token) {
    this._headers['Authorization'] = token;
  }

  send(callback) {
    _REQUESTS[this._url] = {
      _url: this._url,
      _base_url: this._base_url,
      _method: this._method,
      _params: this._params,
      _headers: this._headers,
      callback,
    };

    const _self = this;
    clearTimeout(_TIMER);
    _TIMER = setTimeout(() => {
      _self.processApiRequest();
    }, 1000);
  }

  processApiRequest() {
    const _keys = Object.keys(_REQUESTS);
    if (!_keys.length) {
      return;
    }

    const _self = _REQUESTS[_keys[0]];
    delete _REQUESTS[_keys[0]];
    _self.processApiRequest = this.processApiRequest;

    const request = {
      method: _self._method,
      headers: _self._headers,
      url: `${_self._base_url}${_self._url}`,
      withCredentials: true,
    };

    if (_self._method === 'post') {
      request.data = _self._params;
    } else if (_self._method === 'get' || _self._method === 'delete') {
      request.params = _self._params;
    }

    console.log('request', request);

    axios(request)
      .then((response, error) => {
        // console.log('axois API response',response);
        _self.processApiRequest();
        _self.callback(response.data, error);
      })
      .catch((error, response) => {
        // console.log('axois API error',error);
        message.error(error.message);
        _self.processApiRequest();
        _self.callback(response, error.message);
      });
  }
}


export default new Api();
// const ApiFast = new Api();
// ApiFast.header(3, 'fast');
// export { ApiFast };
