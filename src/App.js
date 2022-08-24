import "./App.css";

import { Provider } from "mobx-react";
import React from "react";

import TableController from "./components/TableController";
import stores from "./stores";

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <TableController />
      </div>
    </Provider>
  );
}

export default App;
