import React    from "react";
import ReactDOM from "react-dom";

import App    from "./App";
import Level0 from "./Level0";
import Level1 from "./Level1";
import Level2 from "./Level2";
import TestTable from "./TestTable";

ReactDOM.render(<App />, document.getElementById("header"));

ReactDOM.render(<Level0 />, document.getElementById("L0"));
ReactDOM.render(<Level1 />, document.getElementById("L1"));
ReactDOM.render(<Level2 />, document.getElementById("L2"));

ReactDOM.render(<TestTable />, document.getElementById("footer"));