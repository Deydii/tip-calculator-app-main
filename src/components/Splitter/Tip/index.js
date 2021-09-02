import Button from "./Button";
import PropTypes from "prop-types";

import "./style.scss";

const Tip = ({ 
  onClickTipButton,
  customTipValue,
  onChangeCustomTipValue,
}) => {
  return (
    <div className="tips">
      <p className="tips__title">Select Tip %</p>
      <div className="tips__buttons">
        <Button 
          tip="5%"
          value="5" 
          onClickTipButton={onClickTipButton}
        />
        <Button 
          tip="10%"
          value="10"
          onClickTipButton={onClickTipButton}
        />
        <Button 
          tip="15%"
          value="15" 
          onClickTipButton={onClickTipButton}
        />
        <Button 
          tip="25%"
          value="25" 
          onClickTipButton={onClickTipButton}
        />
        <Button 
          tip="50%"
          value="50" 
          onClickTipButton={onClickTipButton}
        />
        <input
          className="tip tip--custom"
          type="number"
          placeholder="Custom"
          value={customTipValue}
          onChange={(e) => onChangeCustomTipValue(e.target.value)}
        />
      </div>
    </div>
  );
};

Tip.propTypes = {
  customTipValue: PropTypes.string.isRequired,
  onChangeCustomTipValue: PropTypes.func.isRequired,
}

export default Tip;
