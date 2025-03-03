import React from "react";
import "../App.css"; // Import the CSS file

const Pagenotfound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">Not Found</p>
      <p className="not-found-subtext">
        The resource requested could not be found on this server!
      </p>
    </div>
  );
};

export default Pagenotfound;
