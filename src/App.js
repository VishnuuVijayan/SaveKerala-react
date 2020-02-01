import React from "react";
import Navbar from "./components/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Home from "./components/homescreen.component";
import Adminhome from "./components/adminhome.component";
import DisasterAdd from "./components/disasteradd.component";
import CausalityAdd from "./components/causalityadd.component";
import Update from "./components/update.component";
import AdminLogin from "./components/adminlogin.component";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin" exact component={AdminLogin} />
        <Route path="/admin-home" exact component={Adminhome} />
        <Route path="/admin/add-disaster" exact component={DisasterAdd} />
        <Route path="/admin/causality-add" exact component={CausalityAdd} />
        <Route path="/admin/update-details" exact component={Update} />
      </Router>
    </div>
  );
}

export default App;
