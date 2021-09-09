import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bill from '../../components/Splitter/Bill/index';

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
  const inputEl = screen.getByLabelText('Bill');
  expect(inputEl).toBeInTheDocument();
});

test('Input should have type number attribute', () => {
  render(
  <Bill 
    billValue="" 
    onChangeBillValue={jest.fn()} 
  />);
  const inputEl = screen.getByLabelText('Bill');
  expect(inputEl).toHaveAttribute('type', 'number');
});

test('Input value should be empty', () => {
  render(
    <Bill 
      billValue="" 
      onChangeBillValue={jest.fn()} 
    />);
  const inputEl = screen.getByLabelText('Bill');
  expect(inputEl.value).toBe('');
});

test('onChange function should be called', () => {
 const changeValue = jest.fn()
  render(
    <Bill 
      billValue="" 
      onChangeBillValue={changeValue} 
    />);
  const inputEl = screen.getByLabelText("Bill");

  userEvent.type(inputEl, '200')
  expect(changeValue).toHaveBeenCalled();
});