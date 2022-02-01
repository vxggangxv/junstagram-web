import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignIn from 'pages/SignIn';

describe('SignIn', () => {
  it('should have a username and a password field, also submit button', async () => {
    render(<SignIn />);

    const usernameField = screen.getByPlaceholderText(/username/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { type: 'submit' });

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('on initial render, submit button is disabled, if a username and password is entered submit button is enabled, and allow the user to submit', () => {
    const jestSubmit = jest.fn();
    render(<SignIn jestSubmit={jestSubmit} />);

    const usernameField = screen.getByPlaceholderText(/username/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', {
      type: 'submit',
    });

    // disabled
    expect(submitButton).toBeDisabled();
    // enter a username, password
    userEvent.type(usernameField, 'hyejun');
    userEvent.type(passwordField, 'secret123');
    // enabled
    expect(submitButton).toBeEnabled();
    // allow to submit
    userEvent.click(submitButton);
    expect(jestSubmit).toHaveBeenCalledWith({
      username: 'hyejun',
      password: 'secret123',
    });
  });
});
