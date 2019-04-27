import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import Home from "./containers/Home";
import Dashboard from "./containers/dashboard/dashboard";
import Form from "./components/form";
import Home from "./containers/home/home";
import List from "./components/list";
import ListMie from "./components/list-mie";
import Tm from "./containers/akhir/terimakasih";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Form} />
          <Route path="/listmakanan" component={List} />
          <Route path="/mieayam" component={ListMie} />
          <Route path="/terimakasih" component={Tm} />
        </Switch>
      </div>
    );
  }
}

export default App;
