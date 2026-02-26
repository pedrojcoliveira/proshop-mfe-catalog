import { Provider } from "react-redux";
import store from "../store";
import HomeScreen from "../screens/HomeScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeScreenRemote = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <HomeScreen />
    </Provider>
  );
};

export default HomeScreenRemote;
