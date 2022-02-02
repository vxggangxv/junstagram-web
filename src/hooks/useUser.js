import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar, logUserOut } from 'apollo';
import { useEffect } from 'react';

export const ME_QUERY = gql`
  query me {
    me {
      id
      firstName
      lastName
      username
      email
      avatar
      bio
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data, loading } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return { data, loading };
}

export default useUser;
