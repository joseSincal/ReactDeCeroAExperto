import React from "react";
import ReactDOM from "react-dom/client";

// import { HelloWordApp } from "./HelloWordApp";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWordApp /> */}
        <CounterApp value={20} />
        {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    </React.StrictMode>
);
