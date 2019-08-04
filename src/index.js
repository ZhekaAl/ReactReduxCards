import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.js";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "/src/theme";
import "./styles.css";
//render(<App />, document.getElementById("root"));

//import { render } from "react-snapshot";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
