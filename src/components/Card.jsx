import React from "react";
import { NavLink } from "react-router-dom";

export const Card = ({ details, index }) => {
  return (
    <>
      <div className="card" style={{ width: "300px" }}>
        <img
          src={details.image.original}
          className="card-img-top"
          alt="..."
          width={450}
          height={320}
        />
        <div className="card-body">
          <h4 className="card-title">{details.name}</h4>
          <p style={{ fontSize: "12px" }}>Language : {details.language}</p>
          <p style={{ fontSize: "12px" }}>
            Geners :
            {details.genres.map((e) => {
              return <span className="mx-1">{e}</span>;
            })}
          </p>

          <NavLink to={`/summary/${index}`} className="btn btn-primary">
            Movie Summary
          </NavLink>
        </div>
      </div>
    </>
  );
};
