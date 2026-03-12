import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import HomeCatalogApp from "./HomeCatalogApp";

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <BrowserRouter basename= "/">
    <HomeCatalogApp />
  </BrowserRouter>
</StrictMode>);
