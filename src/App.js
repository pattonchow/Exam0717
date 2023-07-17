import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";
import PreviewDetails from "./PreviewDetails";
import SuccessMessage from "./SuccessMessage";

const App = () => {
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    age: "",
    dob: ""
  });
  const [contactDetails, setContactDetails] = useState({
    phoneNumber: "",
    email: ""
  });
  const [addressDetails, setAddressDetails] = useState({
    streetAddress: "",
    city: "",
    zipcode: "",
    state: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (step === 1) {
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    } else if (step === 2) {
      setContactDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    } else if (step === 3) {
      setAddressDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            personalDetails={personalDetails}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ContactDetails
            contactDetails={contactDetails}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <AddressDetails
            addressDetails={addressDetails}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <PreviewDetails
            personalDetails={personalDetails}
            contactDetails={contactDetails}
            addressDetails={addressDetails}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return <SuccessMessage />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default App;
