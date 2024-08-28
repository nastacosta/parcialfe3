import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Route } from "react-router-dom";

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  });

  return (
    <div className="grid">
      {beers.length
        ? beers.map((beer) => <Card key={beer.id} data={beer} />)
        : null}
    </div>
  );
};

export default Home;
