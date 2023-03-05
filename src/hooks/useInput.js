import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChange = (event) => {
    setValue(Number(event.target.value));
  };

  return [value, onValueChange];
}