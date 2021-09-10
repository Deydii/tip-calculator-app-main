import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tip from '../../components/Splitter/Tip/index';

describe('Tip component', () => {
test('It should render tip component', () => {
  render(
    <Tip
    onClickTipButton={jest.fn()}
    customTipValue=""
    onChangeCustomTipValue={jest.fn()}
    tipValue=""
    />
  );
});

test('It should render 5 buttons', () => {
    render(
      <Tip
      onClickTipButton={jest.fn()}
      customTipValue=""
      onChangeCustomTipValue={jest.fn()}
      tipValue=""
      />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toEqual(5);
  });

test('onClick function should be called when user click on a tip button', () => {
  const onClickButton = jest.fn()
  render(
    <Tip
      onClickTipButton={onClickButton}
      customTipValue=""
      onChangeCustomTipValue={jest.fn()}
      tipValue=""
    />
  );
  const buttonEl = screen.getByRole("button", {name: "5%"});
  userEvent.click(buttonEl);
  expect(onClickButton).toBeCalled();
});

test('It should render custom tip input', () => {
  render(
    <Tip
      onClickTipButton={jest.fn()}
      customTipValue=""
      onChangeCustomTipValue={jest.fn()}
      tipValue=""
    />
  );
  const inputEl = screen.getByPlaceholderText("Custom");
  expect(inputEl).toBeInTheDocument();
});

test('Input should have type number attribute', () => {
    render(
        <Tip
        onClickTipButton={jest.fn()}
        customTipValue=""
        onChangeCustomTipValue={jest.fn()}
        tipValue=""
    />);
    const inputEl = screen.getByPlaceholderText("Custom");
    expect(inputEl).toHaveAttribute("type", "number");
  });

  test('Input value should be empty', () => {
    render(
      <Tip
        onClickTipButton={jest.fn()}
        customTipValue=""
        onChangeCustomTipValue={jest.fn()}
        tipValue=""
      />);
    const inputEl = screen.getByPlaceholderText("Custom");
    expect(inputEl.value).toBe("");
  });

  test('custom tip input value should be equal to customTipValue prop', () => {
    render(
      <Tip
        onClickTipButton={jest.fn()}
        customTipValue="20"
        onChangeCustomTipValue={jest.fn()}
        tipValue=""
    />);
    const inputEl = screen.getByPlaceholderText("Custom");
    expect(inputEl.value).toBe("20");
  });

  test('onChange function should be called when user is typing in the input', () => {
    const changeValue = jest.fn();
    render(
      <Tip
        onClickTipButton={jest.fn()}
        customTipValue=""
        onChangeCustomTipValue={changeValue}
        tipValue=""
      />
    );
    const inputEl = screen.getByPlaceholderText("Custom");
    userEvent.type(inputEl, "20");
    expect(changeValue).toHaveBeenCalled();
  })

  test('onChange function should not be called if input value is not a number', () => {
    const changeValue = jest.fn();
    render(
      <Tip
        onClickTipButton={jest.fn()}
        customTipValue=""
        onChangeCustomTipValue={changeValue}
        tipValue=""
      />
    );
    const inputEl = screen.getByPlaceholderText("Custom");
    userEvent.type(inputEl, "tip");
    expect(changeValue).not.toHaveBeenCalled();
  });
});