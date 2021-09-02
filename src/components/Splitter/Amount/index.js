import PropTypes from 'prop-types';

import "./style.scss";

const Amount = ({ tipAmount, total }) => {
  return (
    <div className="amount">
      <div className="amount__line">
        <div>
          <p className="amount__title">Tip Amount</p>
          <p className="amount__subtitle">/ person</p>
        </div>
        <div>
          <p className="amount__price">${tipAmount.toFixed(2)}</p>
        </div>
      </div>
      <div className="amount__line">
        <div>
          <p className="amount__title">Total</p>
          <p className="amount__subtitle">/ person</p>
        </div>
        <div>
          <p className="amount__price">${total.toFixed(2)}</p>
        </div>
      </div>
      <button className="amount__button" type="button" disabled>Reset</button>
    </div>
  );
};

Amount.propTypes = {
  tipAmount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Amount;
