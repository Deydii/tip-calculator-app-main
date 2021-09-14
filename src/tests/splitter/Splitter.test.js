import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Splitter from '../../components/Splitter';

describe('splitter component', () => {

  test('It should render splitter component', () => {
    render(
      <Splitter />
    );
  });

  test('It should have people__error--hide className when splitter component initially rendered', () => {
    render(
      <Splitter />
    );
    const pEl = screen.getByText("Can't be zero")
    expect(pEl).toHaveClass("people__error--hide");
  });

  test('It should have tipAmount and total values when user had filled everything', () => {
    render(
        <Splitter />
    );

    const inputBillEl = screen.getByLabelText("Bill");
    const buttonEl = screen.getByRole("button", { name: "15%" });
    const inputPeopleEl = screen.getByLabelText("Number of People");

    userEvent.type(inputBillEl, "300");
    userEvent.click(buttonEl);
    userEvent.type(inputPeopleEl, "5");
    
    const tipAmount = screen.getByTestId("amount__tip");
    const totalAMount = screen.getByTestId("amount__total");

    expect(tipAmount.textContent).toBe(`$9.00`);
    expect(totalAMount.textContent).toBe(`$69.00`);
  });

  test('tipAmount and total values should be zero if missing an information', () => {
    render(
        <Splitter />
    );

    const inputBillEl = screen.getByLabelText("Bill");
    const inputPeopleEl = screen.getByLabelText("Number of People");

    userEvent.type(inputBillEl, "300");
    userEvent.type(inputPeopleEl, "5");

    const tipAmount = screen.getByTestId("amount__tip");
    const totalAMount = screen.getByTestId("amount__total");

    expect(tipAmount.textContent).toBe(`$0.00`);
    expect(totalAMount.textContent).toBe(`$0.00`);
  });
});