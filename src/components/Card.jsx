import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

const Card = ({ data }) => {
  return (
    <div className="card">
      <Link to={routes.beer + data.id}>
        <h3>{data.title}</h3>
      </Link>
      <p>{data.price}</p>
      <img src={data.image} alt="beer-detail" />
    </div>
  );
};

export default Card;
