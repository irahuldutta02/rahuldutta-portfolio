import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/context";
import { CustomRoutes } from "./routes/CustomRoutes";

function App() {
  const [theme, setTheme] = useState("#14afc1");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CustomRoutes />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
