import React, { useEffect } from 'react';

import { FieldProps } from 'formik';

import useUser from './hooks/useUser'

const MyField: React.FC<FieldProps<string>> = ({field: {value, onChange, onBlur}, form: {setFieldError}}) => {

  const result = useUser(value);

  const {loading, error, data} = result;

  useEffect(() => {
    if (!loading  && !error && data && data.user) {
      console.log("Setting field error");
      setFieldError('email', 'This email already exists!');
    }
  }, [loading, error, data, setFieldError]);


  return (
    <>
      <input id="email" type="text" value={value} onChange={onChange} onBlur={onBlur} />
    </>
  )
};

export default MyField;