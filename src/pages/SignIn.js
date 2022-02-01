import {
  // faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppMeta from 'components/AppMeta';
import useInput from 'hooks/useInput';
import { useMemo } from 'react';
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

function SignIn({ jestSubmit }) {
  const username = useInput('');
  const password = useInput('');
  const isValid = useMemo(() => {
    return !!username.value && !!password.value ? true : false;
  }, [username.value, password.value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    jestSubmit({
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
              name="username"
              placeholder="username"
              onChange={username.onChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={password.onChange}
            />
            <button type="submit" disabled={!isValid}>
              Login
            </button>
          </form>
        </FormBox>
      </Container>
    </>
  );
}

export default SignIn;
