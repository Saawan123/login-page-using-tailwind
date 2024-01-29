import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./Components/ErrorBoundary";
import PageRouter from "./Routes/PageRouter";
function App() {
  return (
    <>
      <ErrorBoundary>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
        <PageRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
