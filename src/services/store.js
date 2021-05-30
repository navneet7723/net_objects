import { observable, action, makeObservable } from "mobx";

class Store {
  isSiderClosed = true;

  constructor() {
    makeObservable(this, {
      isSiderClosed: observable,
      toggleSider: action
    });
  }

  toggleSider() {
    this.isSiderClosed = !this.isSiderClosed;
  }
}

export default new Store();
