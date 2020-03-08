import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VolunteerLogin from "./components/volunteer.login.component";
import OfficerLogin from "./components/officer.login.component";
import Signup from "./components/signup.component";
import Home from "./components/homescreen.component";
import Adminhome from "./components/adminhome.component";
import DisasterAdd from "./components/disasteradd.component";
import CausalityAdd from "./components/causalityadd.component";
import Update from "./components/update.component";
import AdminLogin from "./components/adminlogin.component";
import UserLogin from "./components/userlogin.component";
import Details from "./components/disasterdetails.component";
import UpdateDetails from "./components/updatedetails.component";
import AddSecretary from "./components/addsecretary.component";
import EditCollector from "./components/editCollector.component";
import UpdateCollector from "./components/updatecollector.component";
import AuthCards from "./components/Cards/AuthCards";
import UpdateTahsildar from "./components/updateTahsildar.component";
import UpdateTahsildarTwo from "./components/updatetahsildar2.component";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/disasterdetails" exact component={Details} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/user-login" exact component={VolunteerLogin} />
          <Route path="/officer-login" exact component={OfficerLogin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/admin" exact component={AdminLogin} />
          <Route path="/admin-home" exact component={Adminhome} />
          <Route path="/admin/add-disaster" exact component={DisasterAdd} />
          <Route path="/admin/causality-add" exact component={CausalityAdd} />
          <Route path="/admin/update" exact component={Update} />
          <Route path="/admin/update-details" exact component={UpdateDetails} />
          <Route path="/secretary" exact component={AddSecretary} />
          <Route
            path="/admin/update-collector"
            exact
            component={EditCollector}
          />
          <Route path="/admin/auth-cards" exact component={AuthCards} />
          <Route
            path="/admin/update-tahsildar"
            exact
            component={UpdateTahsildar}
          />
          <Route
            path="/admin/update-tahsildar/update"
            exact
            component={UpdateTahsildarTwo}
          />
          <Route
            path="/admin/update-collector/update"
            exact
            component={UpdateCollector}
          />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
