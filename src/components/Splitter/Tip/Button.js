import PropTypes from "prop-types";

const Button = ({ tip, value, onClickTipButton }) => (
  <button 
    className="tips__button tip" 
    type="button" 
    value={value} 
    onClick={() => onClickTipButton(value)}
  >
    {tip}
  </button>
);

Button.propTypes = {
  tip: PropTypes.string.isRequired,
  onClickTipButton: PropTypes.func.isRequired,
};

export default Button;
