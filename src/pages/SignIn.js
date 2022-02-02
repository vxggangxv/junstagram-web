import { gql, useMutation } from '@apollo/client';
import {
  // faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logUserIn } from 'apollo';
import AppMeta from 'components/AppMeta';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import useInput from 'hooks/useInput';
// import { useEffect, useMemo } from 'react';
// import { api } from '__mock__/api';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;

  figure {
    text-align: center;
    margin: -30px 0 30px;
  }
`;

const FormBox = styled.div`
  width: 300px;
  .form {
  }
  input,
  button {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
  }
  span[role='alert'] {
    display: block;
    margin-top: -5px;
    padding: 0 10px;
    font-size: 13px;
    color: tomato;
  }
`;

function SignIn({ jestSubmit = () => {} }) {
  const location = useLocation();
  // const username = useInput('');
  // const password = useInput('');
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: location?.state?.username || '',
      password: location?.state?.password || '',
    },
  });

  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError('result', {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    const { username, password } = data;
    // while loading, disabled
    if (loading) return;

    jestSubmit({
      username,
      password,
    });
    login({
      variables: { username, password },
    });
  };
  const clearLoginError = () => {
    clearErrors('result');
  };

  return (
    <Container>
      <AppMeta title="junstagram | login" />
      <h1 className="sr-only">Login</h1>
      <div>
        <figure>
          <FontAwesomeIcon icon={faInstagram} size="5x" />
        </figure>
        <FormBox>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <input
              ref={register({
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username should be longer than 3chars.',
                },
              })}
              onChange={clearLoginError}
              type="text"
              name="username"
              placeholder="username"
              // onChange={username.onChange}
            />
            {!!errors.username && (
              <span role="alert">{errors.username.message}</span>
            )}
            <input
              ref={register({
                required: 'Password is required',
              })}
              onChange={clearLoginError}
              type="text"
              name="password"
              placeholder="password"
              // onChange={password.onChange}
            />
            {!!errors.password && (
              <span role="alert">{errors.password.message}</span>
            )}
            <button
              type="submit"
              disabled={!formState.isValid || loading}
              name="login"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
            {!!errors.result && (
              <span role="alert">{errors.result.message}</span>
            )}
          </form>
        </FormBox>
      </div>
    </Container>
  );
}

export default SignIn;
