import PropTypes from 'prop-types';
import iconDollar from '../../../assets/images/icon-dollar.svg';

import './style.scss';

const Bill = ({ billValue, onChangeBillValue }) => {
  const numbers = /^[0-9.]+$/;

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
          onKeyDown={(e) =>
            e.key.match(numbers) ||
            e.key === "Backspace" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight"
              ? e.key
              : e.preventDefault()
          }
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
