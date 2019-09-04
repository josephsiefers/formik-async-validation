import React, { useEffect } from 'react';

import { FieldProps } from 'formik';

import useUser from './hooks/useUser'

const MyField: React.FC<FieldProps<string>> = ({field: {value, onChange, onBlur}, form: {setFieldError}}) => {

  const result = useUser(value);

  const {loading, data} = result;

  useEffect(() => {
    if (!loading && data && data.user) {
      setFieldError('email', 'This email already exists!')
    }
  }, [loading, data, setFieldError, value]);

  return (
    <>
      <input type="text" value={value} onChange={onChange('email')} onBlur={onBlur('email')} />
    </>
  )
};

export default MyField;