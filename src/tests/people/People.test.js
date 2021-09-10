import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import People from '../../components/Splitter/People';

describe('People component', () => {

  test('It should render people component', () => {
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={jest.fn()}
        error={false}
      />
    );
  });

  test('It should render people input', () => {
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={jest.fn()}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    expect(inputEl).toBeInTheDocument();
  });

  test('Input should have type number attribute', () => {
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={jest.fn()}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test('Input value should be empty', () => {
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={jest.fn()}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    expect(inputEl.value).toBe("");
  });

  test('Input value should be equal to peopleValue prop', () => {
    render(
      <People 
        peopleValue="5"
        onChangePeopleValue={jest.fn()}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    expect(inputEl.value).toBe("5");
  });

  test('onChange function should be called when user is typing in the input', () => {
    const changeValue = jest.fn();
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={changeValue}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    userEvent.type(inputEl, "5");
    expect(changeValue).toHaveBeenCalled();
  });

  test('onChange function should not be called if input value is not a number', () => {
    const changeValue = jest.fn();
    render(
      <People 
        peopleValue=""
        onChangePeopleValue={changeValue}
        error={false}
      />
    );
    const inputEl = screen.getByLabelText("Number of People");
    userEvent.type(inputEl, "people");
    expect(changeValue).not.toHaveBeenCalled();
  });

  test('Error message should not have people__error className if input value is greater than 0', () => {
    render(
        <People 
          peopleValue="5"
          onChangePeopleValue={jest.fn()}
          error={false}
        />
      );
    const pEl = screen.getByText("Can't be zero")
    expect(pEl).toHaveClass("people__error--hide");
  });

test('Error message should have people__error className if input value is 0', () => {
  render(
    <People 
      peopleValue="0"
      onChangePeopleValue={jest.fn()}
      error={true}
    />
    );
    const pEl = screen.getByText("Can't be zero");
    expect(pEl).toHaveClass("people__error");
  });
});
