import iconDollar from "../../../assets/images/icon-dollar.svg";

import "./style.scss";

const Bill = () => {
  return (
    <div className="bill">
      <label className="bill__title">
        Bill
        <br />
        <input className="bill__input" type="number" value="" placeholder="0" />
        <img className="bill__icon" src={iconDollar} alt="icon dollar" />
      </label>
    </div>
  );
};

export default Bill;
