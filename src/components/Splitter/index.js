import Bill from "./Bill";

import "./style.scss";

const Splitter = () => {
  return (
    <main className="splitter">
      <div className="splitter__bill">
        <Bill />
      </div>
    </main>
  );
};

export default Splitter;
