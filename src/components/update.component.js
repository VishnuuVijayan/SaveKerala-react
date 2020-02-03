import React, { Component } from "react";

export default class Update extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          height: 700
        }}
      >
        <div className="container">
          <h3 className="m-2"> Update Disaster Details</h3>
        </div>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import axios from "axios";

// export default class Update extends Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       disasters: []
//     };
//   }

//   componentDidMount() {
//     axios.get("http://localhost:5000/disaster/").then(response => {
//       if (response.data.length > 0) {
//         this.setState({
//           disasters: response.data.map(disaster => disaster.disaster_name),
//           disaster_name: response.data[0].disaster_name
//         });
//       }
//     });
//   }

//   onSubmit = e => {
//     window.location = "/";
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: "#fff",
//           height: 700
//         }}
//       >
//         <div className="container">
//           <h3 className="m-2"> Update Disaster Details</h3>
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group">
//               <label> Disaster </label>
//               <select
//                 ref="disasterInput"
//                 required
//                 className="form-control"
//                 value={this.state.disasters}
//                 onChange={this.state.onChangeDisasters}
//               >
//                 {this.state.disasters.map(function(disaster) {
//                   return (
//                     <option key={disaster} value={disaster}>
//                       {" "}
//                       {disaster}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//             <div className="form-group m-3">
//               <input
//                 type="submit"
//                 className="btn btn-outline-success text-uppercase"
//                 value="Update Disaster Details"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

