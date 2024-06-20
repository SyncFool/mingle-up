import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Components/Register";
import "./output.css";
import SignIn from "./Components/SignIn";
import PageRoutes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageRoutes />
    </>
  );
}

export default App;
