import { inject, observer } from "mobx-react";
import React from "react";

const Test = inject("store")(
  observer(({ store }) => {
    let { counter } = store;
    return <div>my score : {counter}</div>;
  })
);

export default Test;
