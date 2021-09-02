import PropTypes from 'prop-types';

const Button = ({ tip, value, onClickTipButton, tipValue }) => (
  <button
    className={tipValue === value ? "tips__button tip tip--selected" : "tips__button tip"}
    type="button"
    value={value}
    onClick={() => onClickTipButton(value)}
  >
    {tip}
  </button>
);

Button.propTypes = {
  tip: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClickTipButton: PropTypes.func.isRequired,
  tipValue: PropTypes.string.isRequired,
};

export default Button;
