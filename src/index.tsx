import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import "/src/style.scss";

const container = document.getElementById("app");
const app = ReactDOM.createRoot(container!);
app.render(<App />);
