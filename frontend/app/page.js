import { ToastContainer } from "react-toastify";
import HomeScreen from "./screens/HomeScreen";
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  return (
    <>
      <HomeScreen />
      <ToastContainer />
    </>
  );
};

export default page;
