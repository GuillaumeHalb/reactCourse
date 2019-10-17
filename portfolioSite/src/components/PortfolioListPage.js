import React from "react";
import { Link } from "react-router-dom";

const itemIds = ["One", "Two"];

const PortfolioListPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the following things I've done:</p>
    <div>
      {itemIds.map((id, index) => (
        <Link to={"/portfolio/" + (index + 1)}>Item {id}</Link>
      ))}
    </div>
  </div>
);

export default PortfolioListPage;
