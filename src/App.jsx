import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/context";
import { CustomRoutes } from "./routes/CustomRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("#20bf6b");
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
