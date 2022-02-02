import AppMeta from 'components/AppMeta';
import useUser from 'hooks/useUser';
import styled from 'styled-components';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gql, useQuery } from '@apollo/client';
// import { logUserOut } from 'apollo';
// import useUser from 'hooks/useUser';

// const SEE_PROFILE_QUERY = gql`
//   query seeProfile($username: String!) {
//     seeProfile(username: $username) {
//       firstName
//       lastName
//       bio
//       username
//       email
//     }
//   }
// `;

const Container = styled.section`
  margin-top: 50px;
  text-align: center;

  p {
    margin: 10px 0;
  }
`;

function Profile(props) {
  const { data: userData, loading } = useUser();
  // const navigate = useNavigate();
  // const { username } = useParams();
  // const { data, loading } = useQuery(SEE_PROFILE_QUERY, {
  //   variables: username,
  // });

  // useEffect(() => {
  //   if (!username) logUserOut();
  // }, [username]);

  // useEffect(() => {
  //   console.log('userData', userData);
  // }, [userData]);

  return (
    <Container>
      <AppMeta
        title={loading ? 'Loading...' : `${userData?.me?.username}'s Profile`}
      />
      <h1 className="sr-only">Profile</h1>
      <p>{userData?.me?.avater && <img src={userData?.me?.avater} />}</p>
      <p>{userData?.me?.username}</p>
      <p>{userData?.me?.bio}</p>
    </Container>
  );
}

Profile.propTypes = {};

export default Profile;
