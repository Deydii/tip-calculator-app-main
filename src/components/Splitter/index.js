import { useState } from "react";

import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Amount from "./Amount";

import "./style.scss";

const Splitter = () => {

  const [billValue, setBillValue] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [customTipValue, setCustomTipValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");

  const changeBillValue = bill => {
    setBillValue(bill);
  }

  // Get value of tip button
  const onClickTipButton = tip => {
    setTipValue(tip);
  };

  const changeCustomTipValue = custom => {
    setCustomTipValue(custom);
  }

  const changePeopleValue = people => {
    setPeopleValue(people);
  }

  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill billValue={billValue} onChangeBillValue={changeBillValue} />
        <Tip 
          onClickTipButton={onClickTipButton}
          customTipValue={customTipValue}
          onChangeCustomTipValue={changeCustomTipValue}
        />
        <People peopleValue={peopleValue} onChangePeopleValue={changePeopleValue} />
      </div>
      <div className="splitter__amount">
        <Amount />
      </div>
    </main>
  );
};

export default Splitter;
