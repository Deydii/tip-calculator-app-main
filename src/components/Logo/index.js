import logo from "../../assets/images/logo.svg";

import "./style.scss";

const Logo = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Logo;
