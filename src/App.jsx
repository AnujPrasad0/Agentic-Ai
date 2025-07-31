import useThemeClass from "./hooks/useThemeClass";
import Home from "./pages/Home";

const App = () => {
  useThemeClass();
  return <Home />;
};

export default App;
