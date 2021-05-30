import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Home } from "pages";
import { observer } from "mobx-react";
import {
  CustomHeader,
  Container,
  CustomFooter,
  CustomSideBar
} from "../components";
import Store from "../services/store";

const { Header, Footer, Content, Sider } = Layout;

const Root = () => (
  <Router>
    <Layout className="layout-body">
      <Sider
        collapsed={Store.isSiderClosed}
        collapsedWidth={0}
        trigger={null}
        width="100%"
      >
        <CustomSideBar />
      </Sider>
      <Layout className="layout-body">
        <Header
          style={{
            display: "flex",
            justifyContent: "center"
          }}
          className="header-layout"
        >
          <Container>
            <CustomHeader />
          </Container>
        </Header>
        <Content>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Container>
        </Content>
        <Footer
          style={{
            boxShadow: '-2px -4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container>
            <CustomFooter />
          </Container>
        </Footer>
      </Layout>
    </Layout>
  </Router>
);

export default observer(Root);
