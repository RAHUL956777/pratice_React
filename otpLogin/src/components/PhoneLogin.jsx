import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpFields, setShowOtpFields] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validations
    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    //call backend api to send otp

    //show otp field
    setShowOtpFields(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successfull",otp);
  };

  return (
    <div>
      {!showOtpFields ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneLogin;
