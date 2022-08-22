import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer
        autoClose={1500}
        toastStyle={{ backgroundColor: "var(--grey2)", color: "white" }}
      />
    </>
  );
}

export default App;
