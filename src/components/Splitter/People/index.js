import PropTypes from 'prop-types';
import iconPerson from '../../../assets/images/icon-person.svg';

import './style.scss';

const People = ({ peopleValue, onChangePeopleValue, error }) => {
  const numbers = /^[0-9]+$/;

  return (
    <div className="people">
      <label className="people__title">
        Number of People
        <br />
        <input 
          className={error ? "people__input people__input--error" : "people__input"}
          type="number" 
          value={peopleValue}
          onChange={(e) => onChangePeopleValue(e.target.value)}
          placeholder="0"
          onKeyDown={(e) =>
            e.key.match(numbers) ||
            e.key === "Backspace" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight"
              ? e.key
              : e.preventDefault()
          }
        />
        <img className="people__icon" src={iconPerson} alt="icon person" />
      </label>
      <p 
        className={error ? "people__error" : "people__error--hide"}
      >
        Can't be zero
      </p>
    </div>
  );
};

People.propTypes = {
  peopleValue: PropTypes.string.isRequired,
  onChangePeopleValue: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
}

export default People;
