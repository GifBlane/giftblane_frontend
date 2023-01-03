import { useState } from "react";

export const useCustomForm = <T>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
