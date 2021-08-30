import iconPerson from "../../../assets/images/icon-person.svg";

import './style.scss';

const People = () => {
  return (
    <div>
      <label className="people">
        Number of People
        <br />
        <input className="people__input" type="number" value="" placeholder="0" />
        <img className="people__icon" src={iconPerson} alt="icon person" />
      </label>
    </div>
  );
};

export default People;
