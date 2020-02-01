import React from "react";
import Cards from "./Cards";
import "./card-style.css";

export default function TwoCards() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Cards
            title="Add Disaster"
            imgsrc="https://cdn1.iconfinder.com/data/icons/emergency-and-disaster-management-color/64/damage-disaster-attack-harm-ruin-512.png"
            btnRoute="/admin/add-disaster"
          />
        </div>
        <div className="col-md-4">
          <Cards
            title="Add Causalities"
            imgsrc="https://cdn.iconscout.com/icon/premium/png-256-thumb/flood-1540997-1307389.png"
            btnRoute="/admin/causality-add"
          />
        </div>
        <div className="col-md-4">
          <Cards
            title="Update Details"
            imgsrc="https://www.shareicon.net/data/2015/09/22/644537_arrow_512x512.png"
            btnRoute="/admin/update-details"
          />
        </div>
      </div>
    </div>
  );
}
