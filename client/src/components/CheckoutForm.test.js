import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const setup = (label) => {
  const utils = render(<CheckoutForm />)
  const input = utils.getByLabelText(label)
  return {
    input,
    ...utils,
  }
}

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const heading = getByText(/Checkout Form/i);
  expect(heading).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('firstName')
  fireEvent.change(input, { target: { value: 'Aidan' } })
  expect(input.value).toBe('Aidan')
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('lastName')
  fireEvent.change(input, { target: { value: 'Dang' } })
  expect(input.value).toBe('Dang')
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('address')
  fireEvent.change(input, { target: { value: '123 Main St' } })
  expect(input.value).toBe('123 Main St')
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('city')
  fireEvent.change(input, { target: { value: 'Orange' } })
  expect(input.value).toBe('Orange')
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('state')
  fireEvent.change(input, { target: { value: 'California' } })
  expect(input.value).toBe('California')
});

test("form shows success message on submit with form details", () => {
  const { input } = setup('zip')
  fireEvent.change(input, { target: { value: '00000' } })
  expect(input.value).toBe('00000')
});

test("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<CheckoutForm><form onSubmit={onSubmit} /></CheckoutForm>);
  fireEvent.click(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});