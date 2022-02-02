import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignIn from 'pages/SignIn';
import axios from 'axios';
import { api, API_URL, CREATE_URL } from '__mock__/api';
import { MemoryRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo';

jest.mock('../__mock__/api');
jest.mock('axios');

// const jestSubmit = jest.fn(({ email, password }) => {
//   return Promise.resolve({ email, password });
// });
const jestSubmit = jest.fn();

describe('SignIn', () => {
  beforeEach(() => {
    // api.createItem.mockClear();
    render(
      <ApolloProvider client={client}>
        <SignIn jestSubmit={jestSubmit} />
      </ApolloProvider>,
      { wrapper: MemoryRouter }
    );
  });

  // const history = createMemoryHistory();
  // const history = createBrowserHistory();

  const userData = {
    username: 'test',
    password: 'secret123',
  };

  it('should have a username and a password field, also submit button', async () => {
    const usernameField = screen.getByPlaceholderText(/username/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', {
      // type: 'submit'
      name: /login/i,
    });

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('on initial render, submit button is disabled, if a username and password is entered submit button is enabled, and allow the user to submit', async () => {
    const usernameField = await screen.findByPlaceholderText(/username/i);
    const passwordField = await screen.findByPlaceholderText(/password/i);
    const submitButton = await screen.findByRole('button', {
      name: /login/i,
    });

    // disabled
    expect(submitButton).toBeDisabled();
    // enter a username, password
    userEvent.type(usernameField, userData.username);
    userEvent.type(passwordField, userData.password);
    // enabled
    await waitFor(() => expect(submitButton).toBeEnabled());
    // allow to submit
    userEvent.click(submitButton);

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    // expect(jestSubmit).toHaveBeenCalledWith({
    expect(jestSubmit).toBeCalledWith({
      username: userData.username,
      password: userData.password,
    });
  });

  it('simulate create data and returns', async () => {
    api.createItem.mockResolvedValue({
      username: userData.username,
      password: userData.password,
    });

    const newUser = await api.createItem(CREATE_URL, userData);
    expect(newUser).toHaveProperty('username', userData.username);
    expect(newUser).toHaveProperty('password', userData.password);
    expect(api.createItem).toBeCalledTimes(1);
    expect(api.createItem).toBeCalledWith(
      CREATE_URL,
      expect.objectContaining(userData)
      // expect.objectContaining({
      //   username: expect.any(String),
      //   password: expect.any(String),
      // })
    );
  });

  it('fetches data from the API endpoint and returns waht axios get returns', async () => {
    axios.get.mockResolvedValue({
      data: {
        username: userData.username,
        password: userData.password,
      },
    });
    // Promise.reject( { response: { status: 500 } } )
    // axios.post.mockImplementation(() =>
    //   Promise.resolve({ response: { status: 200 } })
    // );

    // const user = await api.findOne(1);
    const user = await axios
      .get(`${API_URL}/users/1`)
      .then((response) => response.data);
    expect(user).toHaveProperty('username', userData.username);
    expect(user).toHaveProperty('password', userData.password);
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith(`${API_URL}/users/1`);
  });
});
