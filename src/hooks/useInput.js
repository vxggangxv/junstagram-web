import { useMemo, useState } from 'react';

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return useMemo(() => ({ value, onChange, setValue }), [value]);
};

export default useInput;
