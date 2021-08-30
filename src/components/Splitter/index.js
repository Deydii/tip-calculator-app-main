import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Amount from "./Amount";

import "./style.scss";

const Splitter = () => {
  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill />
        <Tip />
        <People />
      </div>
      <div className="splitter__amount">
        <Amount />
      </div>
    </main>
  );
};

export default Splitter;
