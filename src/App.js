import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "../src/components/layout";
import Product from "./containers/Home";
import NotFound from "../src/containers/not_found";
import Cart from "../src/containers/cart";
import ProductDetail from "../src/containers/product_details";
import Login from "../src/components/auth/LoginForm";
import SignUp from "../src/components/auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import Admin from "../src/admin";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <Product />
          </Route>
          <Route exact path={"/product_detail/:id"}>
            <ProductDetail />
          </Route>
          <Route exact path={"/cart"}>
            <Cart />
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <PrivateRoute exact path={"/admin"}>
            <Admin />
          </PrivateRoute>
          <Route exact path={"/404"}>
            <NotFound />
          </Route>
          <Route exact path={"*"}>
            <Redirect to={"/404"}></Redirect>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
