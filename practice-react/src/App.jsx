import { useState } from "react";
import Box from "./Box";
import Boxes from "./data";
import "./App.css";

export default function App() {
  const [squares, setSquares] = useState(Boxes);
  function toggle(id) {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const squareElement = squares.map((square) => {
    return (
      <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    );
  });
  return (
    <>
      <h1>Hover Over :)</h1>
      <main>{squareElement}</main>
    </>
  );
}
