import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_USER_QUERY = gql`
  query getUser($email: String) {
    user(email: $email) {
      name
      email
    }
  }
`;

interface userVars {
  email: string
}

interface userData {
  name: string
  email: string
}

const UseEmail = (email: string) => {


  const { loading, error, data, refetch } = useQuery<{user: userData | undefined}, userVars>(
    GET_USER_QUERY,
    {variables: {email: email}}
  );

  //console.log(`In UseEmail: ${email} ${error} ${data && data.user && data.user.email}`)

  return { loading, error, data, refetch: refetch };
}

export default UseEmail;