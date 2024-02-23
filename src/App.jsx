import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/context";
import { CustomRoutes } from "./routes/CustomRoutes";

function App() {
  const [theme, setTheme] = useState("#20bf6b");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CustomRoutes />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
