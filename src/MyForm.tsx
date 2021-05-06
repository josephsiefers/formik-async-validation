import React from 'react';

import useUser from './hooks/useUser';

import { Formik, Form, FormikErrors, Field, ErrorMessage } from 'formik';


interface FormValues {
  email: string
}

const MyForm: React.FC = () => {

  const { refetch } = useUser('');

  //const sleep = (ms: number) => new Promise<string>((resolve) => setTimeout(resolve, ms));

  const handleSubmit = () => {
    console.log("Submitted!")
  }

  const validateForm = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    return refetch({ email: values.email }).then((result) => {
      if (result && result.data && result.data.user) {
        errors.email = "That email is already in use";
        throw errors;
      }
    })
  }

  return (
    <>
      <Formik<FormValues>
        initialValues={{ email: '' }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form>
          <Field name='email' />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default MyForm;
