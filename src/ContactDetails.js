import React from "react";

const ContactDetails = ({
  contactDetails,
  handleChange,
  nextStep,
  prevStep
}) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={contactDetails.phoneNumber}
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="text"
        name="email"
        value={contactDetails.email}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default ContactDetails;
