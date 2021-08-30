import "./style.scss";

const Amount = () => {
  return (
    <div className="amount">
      <div className="amount__line">
        <div>
          <p className="amount__title">Tip Amount</p>
          <p className="amount__subtitle">/ person</p>
        </div>
        <div>
          <p className="amount__tip">$0,00</p>
        </div>
      </div>
      <div className="amount__line">
        <div>
          <p className="amount__title">Total</p>
          <p className="amount__subtitle">/ person</p>
        </div>
        <div>
          <p className="amount__tip">$0,00</p>
        </div>
      </div>
      <button className="amount__button">Reset</button>
    </div>
  );
};

export default Amount;
