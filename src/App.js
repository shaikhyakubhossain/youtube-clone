import "./App.css";
import { RouterWrapper } from "./components/RouterWrapper/router-wrapper.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./redux/store";

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
        <Provider store={store}>
          <RouterWrapper />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
