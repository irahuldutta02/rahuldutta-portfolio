import { useState } from "react";
import "./App.css";
import { CustomRoutes } from "./routes/CustomRoutes";
import { ThemeContext } from "./context/context";

function App() {
  const [theme, setTheme] = useState("#fa8231");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CustomRoutes />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
