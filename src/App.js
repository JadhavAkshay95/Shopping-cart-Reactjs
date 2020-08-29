import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CartContainer from "./component/container/CartContainer";
import HeaderContainer from "./component/container/HeaderContainer";
import ShopListContainer from "./component/container/ShopListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route path="/" component={ShopListContainer} exact></Route>
          <Route path="/cart" component={CartContainer} exact></Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
