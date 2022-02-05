import React from "react";
import "./style.css";

import TestTable from "./TestTable";

function Level0() {
  return (
    <div>
      <h1>Level 0 Modules</h1>
      <p>{TestTable()}</p>
    </div>
  );
}

export default Level0