import React from "react";

const PersonalDetails = ({ personalDetails, handleChange, nextStep }) => {
  return (
    <div>
      <h2>Personal Details</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={personalDetails.name}
        onChange={handleChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="text"
        name="age"
        value={personalDetails.age}
        onChange={handleChange}
      />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={personalDetails.dob}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PersonalDetails;
