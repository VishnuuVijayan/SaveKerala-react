import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import Navbar from "./components/Navbar/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import VolunteerLogin from "./components/User/volunteer.login.component";
import OfficerLogin from "./components/Officer/officer.login.component";
import Signup from "./components/User/signup.component";
import Home from "./components/Home/homescreen.component";
import Adminhome from "./components/Admin/adminhome.component";
import DisasterAdd from "./components/Admin/disasteradd.component";
import CausalityAdd from "./components/Admin/causalityadd.component";
import Update from "./components/Admin/update.component";
import AdminLogin from "./components/Admin/adminlogin.component";
import UserLogin from "./components/User/userlogin.component";
import Details from "./components/Home/disasterdetails.component";
import UpdateDetails from "./components/Admin/updatedetails.component";
import AddSecretary from "./components/Admin/addsecretary.component";
import EditCollector from "./components/Admin/editCollector.component";
import UpdateCollector from "./components/Admin/updatecollector.component";
import AuthCards from "./components/Cards/AuthCards";
import UpdateTahsildar from "./components/Admin/updateTahsildar.component";
import UpdateTahsildarTwo from "./components/Admin/updatetahsildar2.component";
import AddVolunteer from "./components/User/addvolunteer.component";
import Resources from "./components/resources.component";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
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
            <Route
              path="/admin/update-details"
              exact
              component={UpdateDetails}
            />
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
            <Route
              path="/add-volunteer-details"
              exact
              component={AddVolunteer}
            />
            <Route path="/resources-details" exact component={Resources} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "./store";
// import { loadUser } from "./actions/authActions";

// class App extends Component {
//   componentDidMount() {
//     store.dispatch(loadUser());
//   }
//   render() {
//     return (
//       <Provider store={store}>
//         <div>
//           <Router>
//             <Navbar />
//             <Route path="/" exact component={Home} />
//             <Route path="/disasterdetails" exact component={Details} />
//             <Route path="/login" exact component={UserLogin} />
//             <Route path="/user-login" exact component={VolunteerLogin} />
//             <Route path="/officer-login" exact component={OfficerLogin} />
//             <Route path="/signup" exact component={Signup} />
//             <Route path="/admin" exact component={AdminLogin} />
//             <Route path="/admin-home" exact component={Adminhome} />
//             <Route path="/admin/add-disaster" exact component={DisasterAdd} />
//             <Route path="/admin/causality-add" exact component={CausalityAdd} />
//             <Route path="/admin/update" exact component={Update} />
//             <Route
//               path="/admin/update-details"
//               exact
//               component={UpdateDetails}
//             />
//             <Route path="/secretary" exact component={AddSecretary} />
//             <Route
//               path="/admin/update-collector"
//               exact
//               component={EditCollector}
//             />
//             <Route path="/admin/auth-cards" exact component={AuthCards} />
//             <Route
//               path="/admin/update-tahsildar"
//               exact
//               component={UpdateTahsildar}
//             />
//             <Route
//               path="/admin/update-tahsildar/update"
//               exact
//               component={UpdateTahsildarTwo}
//             />
//             <Route
//               path="/admin/update-collector/update"
//               exact
//               component={UpdateCollector}
//             />
//             <Route
//               path="/add-volunteer-details"
//               exact
//               component={AddVolunteer}
//             />
//           </Router>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App;
