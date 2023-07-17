import React from "react";

const AddressDetails = ({
  addressDetails,
  handleChange,
  nextStep,
  prevStep
}) => {
  return (
    <div>
      <h2>Address Details</h2>
      <label htmlFor="streetAddress">Street Address:</label>
      <input
        type="text"
        name="streetAddress"
        value={addressDetails.streetAddress}
        onChange={handleChange}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={addressDetails.city}
        onChange={handleChange}
      />
      <label htmlFor="zipcode">Zipcode:</label>
      <input
        type="text"
        name="zipcode"
        value={addressDetails.zipcode}
        onChange={handleChange}
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        name="state"
        value={addressDetails.state}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AddressDetails;
