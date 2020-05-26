import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test("form can be filled in and submitted", () => {
  // arrange
  const { getByLabelText, getByText, queryByTestId, queryByText } = render(<CheckoutForm />);

  // act
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);


  fireEvent.change(firstNameInput, { target: { value: 'Aidan' } });
  fireEvent.change(lastNameInput, { target: { value: 'Dang' } });
  fireEvent.change(addressInput, { target: { value: '123 Main St.' } });
  fireEvent.change(cityInput, { target: { value: 'City of Irvine' } });
  fireEvent.change(stateInput, { target: { value: 'California' } });
  fireEvent.change(zipInput, { target: { value: '00000' } });

  const button = getByText("Checkout");
  fireEvent.click(button);
  expect(queryByTestId("successMessage")).toBeInTheDocument();
  expect(queryByText(/aidan/i)).toBeInTheDocument();
  expect(queryByText(/dang/i)).toBeInTheDocument();
  expect(queryByText(/123 main st./i)).toBeInTheDocument();
  expect(queryByText(/city of irvine/i)).toBeInTheDocument();
  expect(queryByText(/california/i)).toBeInTheDocument();
  expect(queryByText(/00000/i)).toBeInTheDocument();
});