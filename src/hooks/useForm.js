import React from "react";

export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
