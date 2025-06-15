import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoaderContext from "./Context/LoaderContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoaderContext>
    <App />
  </LoaderContext>
);
