import PropTypes from "prop-types";
import iconDollar from "../../../assets/images/icon-dollar.svg";

import "./style.scss";

const Bill = ({ billValue, onChangeBillValue }) => {
  return (
    <div className="bill">
      <label className="bill__title">
        Bill
        <br />
        <input
          className="bill__input"
          type="number"
          value={billValue}
          placeholder="0"
          onChange={(e) => onChangeBillValue(e.target.value)}
        />
        <img className="bill__icon" src={iconDollar} alt="icon dollar" />
      </label>
    </div>
  );
};

Bill.propTypes = {
  billValue: PropTypes.string.isRequired,
  onChangeBillValue: PropTypes.func.isRequired,
};

export default Bill;
