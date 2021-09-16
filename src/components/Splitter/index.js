import { useState, useEffect } from 'react';

import Bill from './Bill';
import Tip from './Tip';
import People from './People';
import Amount from './Amount';

import "./style.scss";

const Splitter = () => {
  const [billValue, setBillValue] = useState("");
  const [tipValue, setTipValue] = useState("");
  const [customTipValue, setCustomTipValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [error, setError] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const changeBillValue = (bill) => {
    setBillValue(bill);
  };

  // Get value of tip button
  const onClickTipButton = (tip) => {
    setTipValue(tip);
    setCustomTipValue("");
  };

  const changeCustomTipValue = (custom) => {
    setCustomTipValue(custom);
    setTipValue("");
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

  // Reset Tip Calculator
  const onClickResetButton = () => {
    setBillValue("");
    setTipValue("");
    setCustomTipValue("");
    setPeopleValue("");
  }

  useEffect(() => {
    const bill = parseFloat(billValue);
    const tip = parseFloat(tipValue);
    const people = parseFloat(peopleValue);
    const custom = parseFloat(customTipValue);

    // Get tip amount per person when user clicks on a tip button
    if (bill && tip && people) {
      setIsDisabled(false);
      // Tip Amount per person
      const tipAmountPerPerson = (bill * tip) / people;
      setTipAmount(tipAmountPerPerson);

      // Total per person
      const totalPerPerson = bill / people + tipAmountPerPerson;
      setTotal(totalPerPerson);
    }
    // Get tip amount per person when user choose a custom tip
    else if (bill && custom && people) {
      setIsDisabled(false);
      const tipAmountPerPerson = (bill * custom) / 100 / people;
      setTipAmount(tipAmountPerPerson);

      const totalPerPerson = bill / people + tipAmountPerPerson;
      setTotal(totalPerPerson);
    } else if (people === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      setTipAmount(0);
      setTotal(0);
    }
  }, [billValue, tipValue, customTipValue, peopleValue]);

  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill billValue={billValue} onChangeBillValue={changeBillValue} />
        <Tip
          onClickTipButton={onClickTipButton}
          customTipValue={customTipValue}
          onChangeCustomTipValue={changeCustomTipValue}
          tipValue={tipValue}
        />
        <People
          peopleValue={peopleValue}
          onChangePeopleValue={changePeopleValue}
          error={error}
        />
      </div>
      <div className="splitter__amount">
        <Amount 
          tipAmount={tipAmount} 
          total={total} 
          isDisabled={isDisabled}
          onClickResetButton={onClickResetButton}
        />
      </div>
    </main>
  );
};

export default Splitter;
