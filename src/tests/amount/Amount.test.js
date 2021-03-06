import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Amount from '../../components/Splitter/Amount';

describe('Amount component', () => {

  test('It should render people component', () => {
    render(
      <Amount 
        tipAmount={0}
        total={0}
        isDisabled={true}
        onClickResetButton={jest.fn()}
      />
    );
  });

    test('reset button should be disabled', () => {
      render(
        <Amount 
          tipAmount={0}
          total={0}
          isDisabled={true}
          onClickResetButton={jest.fn()}
        />
      );
      const buttonEl = screen.getByRole("button");
      expect(buttonEl).toBeDisabled();
    });

    test('reset button should not be disabled if tipAmount value or total value is not equal to 0', () => {
      render(
        <Amount 
          tipAmount={10}
          total={76.67}
          isDisabled={false}
          onClickResetButton={jest.fn()}
        />
      );
      const buttonEl = screen.getByRole("button");
      expect(buttonEl).not.toBeDisabled();
    });

    test('tipAmount value and total value should be a number', () => {
      const tipAmountValue = 10;
      const totalValue = 76.67;
      render(
        <Amount 
          tipAmount={tipAmountValue}
          total={totalValue}
          isDisabled={false}
          onClickResetButton={jest.fn()}
        />
      );
      expect(typeof tipAmountValue).toBe("number");
      expect(typeof totalValue).toBe("number");
    });

    test('tipAmount value should have 2 decimales', () => {
      const tipAmountValue = 10.233;
      render(
        <Amount 
          tipAmount={tipAmountValue}
          total={76.67}
          isDisabled={false}
          onClickResetButton={jest.fn()}
        />
      );
      const pEl = screen.getByTestId("amount__tip");
      const pElText = parseFloat(pEl.textContent.slice(1));
      expect(tipAmountValue).not.toEqual(pElText);
    });
    

    test('onClick function should be called when user clicks on reset button', () => {
      const onClickButton = jest.fn();
      render(
        <Amount 
          tipAmount={10}
          total={76.67}
          isDisabled={false}
          onClickResetButton={onClickButton}
        />
      );
      const buttonEl = screen.getByRole("button");
      userEvent.click(buttonEl);
      expect(onClickButton).toHaveBeenCalled();
    });
});