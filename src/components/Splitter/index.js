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
  const [error, setError] = useState(false);

  const changeBillValue = (bill) => {
    setBillValue(bill);
  };

  // Get value of tip button
  const onClickTipButton = (tip) => {
    setTipValue(tip);
  };

  const changeCustomTipValue = (custom) => {
    setCustomTipValue(custom);
  };

  const changePeopleValue = (people) => {
    if (people === "0") {
      setPeopleValue(people);
      setError(true);
    } else {
      setPeopleValue(people);
      setError(false);
    }
  };

  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill billValue={billValue} onChangeBillValue={changeBillValue} />
        <Tip
          onClickTipButton={onClickTipButton}
          customTipValue={customTipValue}
          onChangeCustomTipValue={changeCustomTipValue}
        />
        <People
          peopleValue={peopleValue}
          onChangePeopleValue={changePeopleValue}
          error={error}
        />
      </div>
      <div className="splitter__amount">
        <Amount />
      </div>
    </main>
  );
};

export default Splitter;
