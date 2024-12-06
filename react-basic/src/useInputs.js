import { useState } from "react";

const useInputs = (initialState) => {
  const [inputs, setInputs] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const reset = () => {
    setInputs(initialState);
  };

  return { inputs, handleChange, reset };
};

export default useInputs;
