import { useState } from "react";

import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Amount from "./Amount";

import "./style.scss";

const Splitter = () => {

  const [billValue, setBillValue] = useState("");

  // Change bill's value
  const changeBillValue = bill => {
    setBillValue(bill);
  }

  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill billValue={billValue} onChangeBillValue={changeBillValue} />
        <Tip />
        <People />
      </div>
      <div className="splitter__amount">
        <Amount />
      </div>
    </main>
  );
};

export default Splitter;
