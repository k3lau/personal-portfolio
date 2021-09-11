import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";

const Index = () => {
  setToLS("all-themes", themes.default);
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
