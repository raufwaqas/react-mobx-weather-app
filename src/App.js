import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import "./App.css";
import CoutnerApp from "./components/CoutnerApp";
import Searchbar from "./components/Searchbar";
import Test from "./components/Test";

const App = inject("store")(
  observer(({ store }) => {
    // let [counter, setCounter] = useState(111);
    return (
      <div className="app">
        <h4 className="text-center">Wather App</h4>
        <CoutnerApp />
        {/* <Searchbar /> */}
        <Test />
      </div>
    );
  })
);

export default App;
