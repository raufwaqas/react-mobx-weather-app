import { inject, observer } from "mobx-react";
import React from "react";

const CoutnerApp = inject("store")(
  observer(({ store }) => {
    let { counter } = store;
    return (
      <div className="counterApp">
        <button className="btn btn-dark">+</button>
        <h5>Counter : {counter}</h5>
        <button className="btn btn-dark">-</button>
      </div>
    );
  })
);
export default CoutnerApp;
