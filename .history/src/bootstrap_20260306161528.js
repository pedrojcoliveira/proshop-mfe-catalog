import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <BrowserRouter basename= "/">
    <HomeCatalogApp />
  </BrowserRouter>
</StrictMode>);
