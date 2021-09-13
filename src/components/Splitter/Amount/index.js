import PropTypes from "prop-types";

import "./style.scss";

const Amount = ({ 
  tipAmount, 
  total, 
  isDisabled,
  onClickResetButton 
}) => {
  return (
    <div className="amount">
      <div className="amount__line">
        <div>
          <p className="amount__title">Tip Amount</p>
          <p className="amount__subtitle">/ person</p>
        </div>
        <div>
          <p className="amount__price" data-testid="amount__price">${tipAmount.toFixed(2)}</p>
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
      {isDisabled ? (
        <button className="amount__button" type="button" disabled>
          Reset
        </button>
      ) : (
        <button 
          className="amount__button" 
          type="button"
          onClick={onClickResetButton}
        >
          Reset
        </button>
      )}
    </div>
  );
};

Amount.propTypes = {
  tipAmount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClickResetButton: PropTypes.func.isRequired,
};

export default Amount;
