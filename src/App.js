import "./App.css";
import { RouterWrapper } from "./components/RouterWrapper/router-wrapper.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
