import Footer from "../footer";
import Header from "../header";
import classes from "./wrapper.module.less";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainWrapper = ({ children, navbarType = 1, navChild, t }) => {
  return (
    <div className={classes.main_wrapper}>
      {navbarType == 1 ? <Header /> : <Header>{navChild}</Header>}
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MainWrapper;
