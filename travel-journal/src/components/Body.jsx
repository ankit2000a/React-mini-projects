import React from "react";
import LocationCard from "./LocationCard";
import Data from "../Data";

export default function Body() {
  const getCards = Data.map((item) => {
    return (
      <LocationCard 
      key={item.id} 
      item={item} 
      />
    )
  });
  return <section>{getCards}</section>;
}
