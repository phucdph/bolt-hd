import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@hero-design/react";
function App() {
  return <ThemeProvider theme={theme}>Hero Design</ThemeProvider>;
}

export default App;
