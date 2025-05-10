import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext from "./context/MainContext.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
