import PropTypes from 'prop-types';
import iconPerson from "../../../assets/images/icon-person.svg";

import './style.scss';

const People = ({ peopleValue, onChangePeopleValue }) => {
  return (
    <div className="people">
      <label className="people__title">
        Number of People
        <br />
        <input 
          className="people__input" 
          type="number" 
          value={peopleValue}
          onChange={(e) => onChangePeopleValue(e.target.value)}
          placeholder="0" />
        <img className="people__icon" src={iconPerson} alt="icon person" />
      </label>
    </div>
  );
};

People.propTypes = {
  peopleValue: PropTypes.string.isRequired,
  onChangePeopleValue: PropTypes.func.isRequired,
}

export default People;
