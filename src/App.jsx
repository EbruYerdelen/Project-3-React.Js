import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Data from "./Data.jsx";

function App() {
  const cardComponents = Data.map((data) => {
    return (
      <Card
        key={data.id}
        data={
          data
        } /*or you can use spread syntax for object literal writing,which is {...data}.This will make our prop look like we are writing every property of the data object one by one.
            if you pass the data here like {...data},you will need to remove every "data" writings from card.jsx*/
      />
    );
  });
  return (
    <div id="all-container">
      <NavBar />
      <Hero />
      <div className="cards-container">{cardComponents}</div>
    </div>
  );

  /*
    img="image12.png"
    rating="5.0"
    reviewCount="(6)"
    location="•USA"
    title="Life lessons with Katie Zaferes"
    price={136}

2nd way:
    img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        openSpots={data.openSpots}
  */
}

export default App;
