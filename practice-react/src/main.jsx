import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppJoke from "./AppJokes.jsx";
import AppRead from "./AppRead.jsx";
import Form from "./Form.jsx";
import Effect from "./Effect.jsx";
import EffectToggle from "./EffectToggle.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EffectToggle />
  </React.StrictMode>
);
