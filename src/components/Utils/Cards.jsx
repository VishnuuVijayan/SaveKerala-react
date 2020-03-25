import React from "react";

export default function Cards(props) {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          className="card-img-top"
          style={{ width: 250, height: 250 }}
          alt="hello"
          src={props.imgsrc}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <a href={props.btnRoute} className="btn btn-outline-success">
          Go
        </a>
      </div>
    </div>
  );
}
