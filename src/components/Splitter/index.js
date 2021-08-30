import Bill from "./Bill";
import Tip from "./Tip";

import "./style.scss";

const Splitter = () => {
  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill />
        <Tip />
      </div>
    </main>
  );
};

export default Splitter;
