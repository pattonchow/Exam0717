import React from "react";

const PreviewDetails = ({
  personalDetails,
  contactDetails,
  addressDetails,
  prevStep,
  nextStep
}) => {
  return (
    <div>
      <h2>Preview Details</h2>
      <h3>Personal Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{personalDetails.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{personalDetails.age}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{personalDetails.dob}</td>
          </tr>
        </tbody>
      </table>
      <h3>Contact Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Phone Number:</td>
            <td>{contactDetails.phoneNumber}</td>
          </tr>
          <tr>
            <td>Email Address:</td>
            <td>{contactDetails.email}</td>
          </tr>
        </tbody>
      </table>
      <h3>Address Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Street Address:</td>
            <td>{addressDetails.streetAddress}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{addressDetails.city}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{addressDetails.state}</td>
          </tr>
          <tr>
            <td>Zipcode:</td>
            <td>{addressDetails.zipcode}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Submit</button>
    </div>
  );
};

export default PreviewDetails;
