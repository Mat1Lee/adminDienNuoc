import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import {store} from '../src/context/redux/types/configstore'
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider >
      <App />
    </DarkModeContextProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
