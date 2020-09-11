import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          console.log(props);
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page"
        render={(props) => {
          console.log(props);
          return (
            <p>
              Jesteś na <span>{props.match.params.page}</span>
              Jesteś na <span>{props.match.url}</span>
              Jesteś na <span>{props.match.path}</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        render={(props) => {
          console.log(props);
          return (
            <p>
              Jesteś na <span>{props.match.params.page}</span>
              Jesteś na <span>{props.match.url}</span>
              Jesteś na <span>{props.match.path}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
