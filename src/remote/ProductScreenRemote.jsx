import { Provider } from "react-redux";
import store from "../store";
import ProductScreen from "../screens/ProductScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductScreenRemote = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ProductScreen />
    </Provider>
  );
};

export default ProductScreenRemote;
