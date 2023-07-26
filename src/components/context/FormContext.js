import React, { useContext, useState } from "react";

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "Muhammad",
    email: "asdas@addsa.com",
    date: "12-5-23",
    time: "17:00",
    guests: "2",
    occasion: "meal time",
  });

  const setFormHandler = (data) => {
    setForm(data);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm: setFormHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useFormContext = () => useContext(FormContext);
