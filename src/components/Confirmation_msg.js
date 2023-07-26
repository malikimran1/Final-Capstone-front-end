import React from "react";
import { useFormContext } from "../components/context/FormContext";
import "../css/confirm.css";


const Confirmation_msg = () => {
  const formContext = useFormContext();
  return (
    <div id="conf_main">
      <div>
        <p style={{ lineHeight: "0" }}>Thank You {formContext.form.name}</p>{" "}
        <br />
        <p style={{ lineHeight: "0" }}>
          Table for {formContext.form.guests} persons has been reserved for your{" "}
          {formContext.form.occasion}
        </p>{" "}
        <br />
        <p style={{ lineHeight: "0" }}>
          Booking Date is {formContext.form.date}
        </p>{" "}
        <br />
        <p style={{ lineHeight: "0" }}>
          Booking Time is {formContext.form.time}
        </p>{" "}
        <br />
        <p style={{ lineHeight: "0" }}>
          Confirmation Email has been sent to your Email ID :{" "}
          {formContext.form.email}
        </p>
      </div>
    </div>
  );
};

export default Confirmation_msg;
