import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactUs from './Components/ContactUs';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/



describe('ContactUs Form', () => {
  beforeEach(() => {
    render(<ContactUs />);
  });

  test('renders the form correctly', () => {
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('shows validation errors on submit if fields are empty', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  test('shows an error message for invalid email', async () => {
    fireEvent.input(screen.getByLabelText(/Email:/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  test('resets the form after successful submission', async () => {
    fireEvent.input(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/Message:/i), { target: { value: 'Hello there!' } });

    fireEvent.submit(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(screen.getByLabelText(/Name:/i).value).toBe('');
      expect(screen.getByLabelText(/Email:/i).value).toBe('');
      expect(screen.getByLabelText(/Message:/i).value).toBe('');
    });

    expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Message is required/i)).not.toBeInTheDocument();
  });
});
