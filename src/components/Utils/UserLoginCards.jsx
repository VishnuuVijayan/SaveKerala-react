import React from "react";
import Cards from "./Cards";
import "./card-style.css";

export default function UserLoginCards() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Cards
            title="Camp Officer"
            imgsrc="https://cdn2.iconfinder.com/data/icons/employee-appraisal-filled-outline-1/64/employee-user-businessman-officer-man-512.png"
            btnRoute="/officer-login"
          />
        </div>
        <div className="col-md-6">
          <Cards
            title="User"
            imgsrc="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"
            btnRoute="/user-login"
          />
        </div>
      </div>
    </div>
  );
}
