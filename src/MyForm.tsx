import React from 'react';

import { Formik, Form, FormikErrors, Field, ErrorMessage } from 'formik';

import MyField from './MyField';


interface FormValues {
  email: string
}

const MyForm: React.FC = () => {

  //const sleep = (ms: number) => new Promise<string>((resolve) => setTimeout(resolve, ms));

  const handleSubmit = () => {
    console.log("Submitted!")
  }

  const validateForm = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    console.log("In validate form");

    return errors;
  }

  return (
    <>
      <Formik<FormValues>
        initialValues={{email: ''}}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({errors}) => {
          return (
            <Form>
              <p>{errors.email}</p>
              <Field name='email' component={MyField}/>
              <ErrorMessage name="email"/>
              <button type="submit">Submit</button>
            </Form>
          )}
        }
      </Formik>
    </>
  );
}

export default MyForm;
