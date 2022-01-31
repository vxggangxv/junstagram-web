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

  it('should allow the user to submit', () => {
    const submit = jest.fn();
    render(<SignIn submit={submit} />);

    const usernameField = screen.getByPlaceholderText(/username/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', {
      type: 'submit',
    });

    userEvent.type(usernameField, 'hyejun');
    userEvent.type(passwordField, 'secret123');
    userEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
      username: 'hyejun',
      password: 'secret123',
    });
  });
});
