import React from 'react';

import MyForm from './MyForm';

import { MockedProvider } from '@apollo/react-testing';

import { GET_USER_QUERY } from './hooks/useUser'

const mocks = [
  {
    request: {
      query: GET_USER_QUERY,
      variables: {
        email: 'j@j.co',
      },
    },
    result: {
      data: {
        user: {
          name: "Joseph Siefers",
          email: 'j@j.co'
        },
      },
    },
  },
];


const App: React.FC = () => {
  return (
    <>
      <MockedProvider mocks={mocks} addTypename={false}>
        <MyForm />
      </MockedProvider>
    </>
  );
}

export default App;