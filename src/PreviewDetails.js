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
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th
              colSpan="2"
              style={{ border: "1px solid black", padding: "5px" }}
            >
              Personal Details
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>Name:</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {personalDetails.name}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>Age:</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {personalDetails.age}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Date of Birth:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {personalDetails.dob}
            </td>
          </tr>
          <tr>
            <th
              colSpan="2"
              style={{ border: "1px solid black", padding: "5px" }}
            >
              Contact Details
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Phone Number:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {contactDetails.phoneNumber}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Email Address:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {contactDetails.email}
            </td>
          </tr>
          <tr>
            <th
              colSpan="2"
              style={{ border: "1px solid black", padding: "5px" }}
            >
              Address Details
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Street Address:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addressDetails.streetAddress}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>City:</td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addressDetails.city}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              State:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addressDetails.state}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              Zipcode:
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {addressDetails.zipcode}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Submit</button>
    </div>
  );
};

export default PreviewDetails;
