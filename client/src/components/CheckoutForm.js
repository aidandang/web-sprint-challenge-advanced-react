import React, { useState } from "react";
import { useForm } from '../hooks/useForm';
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues, handleChanges] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="form">
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            aria-label="firstName"
            value={values.firstName}
            onChange={e => handleChanges(e.target.name, e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            aria-label="lastName"
            value={values.lastName}
            onChange={e => handleChanges(e.target.name, e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            aria-label="address"
            value={values.address}
            onChange={e => handleChanges(e.target.name, e.target.value)}
          />
        </label>
        <label>
          City:
          <input 
            name="city"
            aria-label="city"
            value={values.city} 
            onChange={e => handleChanges(e.target.name, e.target.value)} 
          />
        </label>
        <label>
          State:
          <input 
            name="state"
            aria-label="state" 
            value={values.state} 
            onChange={e => handleChanges(e.target.name, e.target.value)}
          />
        </label>
        <label>
          Zip:
          <input 
            name="zip"
            aria-label="zip"
            value={values.zip} 
            onChange={e => handleChanges(e.target.name, e.target.value)}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
