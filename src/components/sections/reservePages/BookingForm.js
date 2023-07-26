import React from "react";
import "../../../css/table.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "../../context/FormContext";

const initialavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingForm = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes]=useState(initialavailableTimes);
  const formContext = useFormContext();

  const options = availableTimes.map((items) => {
    return <option>{items}</option>;
  });
  
  const [name, setName] = useState("PLease Enter Full Name");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [ip_email, setEmail] = useState("Please Enter a valid Email ID");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(true);
  const [selectedDate, setSelectedDate] = useState();
  const [valDate, setValDate] = useState(false);
  const [focusDate, setFocusDate] = useState(true);
  const [guestNumber, setguestNumber] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const [isGuestFocus, setIsGuestFocus] = useState(true);
  const [selectedTime, setSelectedTime]=useState("Select Time...");
  const [selectedTimeOption, setSelectedTimeOption]=useState("");
  const [isTime, setIsTime]=useState(false);
  const [isTimeFocus, setisTimeFocus]=useState(true);
  const [selectedOcassion, setSelectedOcassion]=useState("Select Ocassion");
  const [isOcassion, setIsOcassion]=useState(false);
  const [isOcassionFocus, setIsOcassionFocus]=useState(true);
  const [selectOcassion, setSelectOcassions]=useState("");
  
  


const occasionHandler=(e)=>{
  setSelectedOcassion(e.target.value)
  setSelectOcassions(e.target.value)
  setIsOcassion(e.target.value=="Select Ocassion" ? false:true)
}
const ocassionBlur=()=>{
  setIsOcassionFocus(false);
}
  const timeHandler=(e)=>{
    setSelectedTime(e.target.value)
    setSelectedTimeOption(e.target.value)
  setIsTime(e.target.value=="Select Time..." ? false:true)
  }

  const timeBlur=()=>{
    setisTimeFocus(false);
  }

  const onCHange_name = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const focusName = () => {
    setIsNameFocus(false);
  };

  const onChange_email = (e) => {
    setEmail(e.target.value);
    setIsEmail(
      e.target.value.length > 9 &&
      e.target.value.indexOf("@") > 1 &&
      e.target.value.indexOf(".com") > 1
        ? true
        : false)
  };

  const email_blur=()=>{
    setIsEmailFocus(false);
  }

  const dateChangeHandler = (e) => {
  
      const selectedDate1 = new Date(e.target.value);
      const today = new Date();
      setValDate(selectedDate1 >= today ? true : false)
      setSelectedDate(selectedDate1);

  };
  const guestHandler = (e) => {
    setguestNumber(e.target.value);
   setIsGuest(e.target.value > 0 && e.target.value < 11 ? true : false);
  };
  const guest_blur=()=>{
    setIsGuestFocus(false);
  }
  const dateBlurHandler=()=>{
    setFocusDate(false);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      (isName&&isEmail&&valDate&&isGuest&&isTime&&isOcassion) ? finalFunction() :alert("Please Fill All The Fields Correctly");
      
      
  };

  const finalFunction = ()=>{
    navigate("/table/confirm")
    formContext.setForm({
      name: name,
      email: ip_email,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      guests: guestNumber,
      occasion: selectedOcassion,
    })
  }


  return (
    <>
      <div id="res_main">
        <h1>BOOK NOW</h1>

        <form
          style={{
            display: "grid",
            Width: "400vw",
            gap: "2vw",
            width: "35vw",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
            {" "}
            Name:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-name"
              className="res_ip"
              onChange={onCHange_name}
              onBlur={focusName}
              placeholder={name}
            />
            {!isName && !isNameFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
          </div>

          <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
            {" "}
            Email:{" "}
          </label>

          <div>
            <input
              type="email"
              id="res-email"
              className="res_ip"
              onChange={onChange_email}
              onBlur={email_blur}
              placeholder={ip_email}
            />
            {!isEmail && !isEmailFocus && (
              <p className="error_msg"> * Please Enter a valid Email</p>
            )}
          </div>

          <label htmlFor="res-date" style={{ fontWeight: "bold" }}>
            {" "}
            Date:{" "}
          </label>

          <div>
            <input
              type="date"
              id="res-date"
              className="res_ip"
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
            />
            {!valDate && !focusDate && (
              <p className="error_msg"> * Please Enter a valid Date</p>
            )}
          </div>

          <label htmlFor="res-time" style={{ fontWeight: "bold" }}>
            Choose time:
          </label>
          <div>
          <select id="res-time " className="res_ip2" disabled={!valDate} onBlur={timeBlur} onChange={timeHandler} value={selectedTime}>
            <option disabled> Select Time...</option>
            {options}
          </select>
          {!isTime && !isTimeFocus && (
              <p className="error_msg"> * Please Enter a valid Time</p>
            )}
          </div>
          <label
            htmlFor="guests"
            style={{ fontWeight: "bold" }}
          >
            Number of guests
          </label>
          <div>
          <input
            type="number"
            placeholder="0"
            min="1"
            max="10"
            id="guests"
            className="res_ip"
            onBlur={guest_blur}
            onChange={guestHandler}
          ></input>
          {!isGuest && !isGuestFocus && (
              <p className="error_msg"> * PLease Select a Valid Number of Guests Attending </p>
            )}
          </div>

          <label htmlFor="occasion" style={{ fontWeight: "bold" }}>
            Occasion
          </label>
          <div>
          <select id="occasion" className="res_ip2" onChange={occasionHandler} onBlur={ocassionBlur} value={selectedOcassion}>
            <option disabled>Select Ocassion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {!isOcassion && !isOcassionFocus && (
              <p className="error_msg"> * Please Enter a valid Time</p>
            )}
          </div>

          
          <div style={{marginLeft:"auto",marginRight:"auto"}}>
          <button
            type="submit"
            value="Make Your reservation"
            className="res_but"
          >Reserve Your Table</button>
          
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;