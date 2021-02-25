import React from 'react';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Display from "./Display";
import Products from "./Products";
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <>
    <Nav/>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/products" component={Products}></Route>
    <Route exact path="/products/:id" component={Display}></Route>
    <Route exact path="*" component={Home}></Route>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
