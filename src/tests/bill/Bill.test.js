import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bill from '../../components/Splitter/Bill/index';

describe('Bill component', () => {

  test('It should render bill component', () => {
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={jest.fn()} 
      />);
  });

  test('It should render bill input', () => {
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={jest.fn()} 
      />);
    const inputEl = screen.getByLabelText("Bill");
    expect(inputEl).toBeInTheDocument();
  });

  test('Input should have type number attribute', () => {
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={jest.fn()} 
      />);
    const inputEl = screen.getByLabelText("Bill");
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test('Initial input value should be empty', () => {
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={jest.fn()} 
      />);
    const inputEl = screen.getByLabelText("Bill");
    expect(inputEl.value).toBe("");
  });

  test('Input value should be equal to billValue prop', () => {
    render(
      <Bill 
        billValue="200" 
        onChangeBillValue={jest.fn()} 
      />);
    const inputEl = screen.getByLabelText("Bill");
    expect(inputEl.value).toBe("200");
  });

  test('onChange function should be called when user is typing in the input', () => {
    const changeValue = jest.fn();
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={changeValue} 
      />);
    const inputEl = screen.getByLabelText("Bill");

    userEvent.type(inputEl, "200");
    expect(changeValue).toHaveBeenCalled();
  });

  test('onChange function should not be called if input value is not a number', () => {
    const changeValue = jest.fn();
    render(
      <Bill 
        billValue="" 
        onChangeBillValue={changeValue} 
      />);
    const inputEl = screen.getByLabelText("Bill");
    userEvent.type(inputEl, "bill");
    expect(changeValue).not.toHaveBeenCalled();
  });
});
