import {
  // faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppMeta from 'components/AppMeta';
import useInput from 'hooks/useInput';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FormBox = styled.div`
  .form {
  }
`;

function SignIn({ submit }) {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <>
      <AppMeta title="junstagram | login" />
      <Container>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <FormBox>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              onChange={username.onChange}
            />
            <input
              type="text"
              placeholder="password"
              onChange={password.onChange}
            />
            <button type="submit">Login</button>
          </form>
        </FormBox>
      </Container>
    </>
  );
}

export default SignIn;
