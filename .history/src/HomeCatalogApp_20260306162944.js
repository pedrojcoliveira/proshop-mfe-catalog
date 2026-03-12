import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const HomeCatalogApp = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search/:keyword" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
      </Provider>
    </HelmetProvider>
  );
};

export default HomeCatalogApp;