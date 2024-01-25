import ErrorBoundary from "./Components/ErrorBoundary";
import PageRouter from "./Routes/PageRouter";
function App() {
  return (
    <>
      <ErrorBoundary>
        <PageRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
