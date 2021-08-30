import "./style.scss";

const Tip = () => {
  return (
    <div className="tips">
      <p className="tips__title">Select Tip %</p>
      <div className="tips__buttons">
        <button className="tips__button tip">5%</button>
        <button className="tips__button tip">10%</button>
        <button className="tips__button tip">15%</button>
      </div>
      <div className="tips__buttons">
        <button className="tips__button tip">25%</button>
        <button className="tips__button tip">50%</button>
        <input className="tip tip--custom" type="number" placeholder="Custom" value="" />
      </div>
    </div>
  );
};

export default Tip;
