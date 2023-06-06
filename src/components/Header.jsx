import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
            fontSize: "26px",
            color: "black",
            fontWeight: "bolder",
            cursor: "pointer",
            marginLeft: "2px",
          }}
        >
          Quadb Tech
        </NavLink>
      </header>
    </>
  );
};
