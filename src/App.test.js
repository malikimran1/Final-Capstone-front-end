import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from "./components/sections/reservePages/BookingForm";

describe('BookingForm', () => {
  test('submits the form with valid data', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<BookingForm onSubmit={onSubmit} />);
    const NameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const submitButton = getByRole('button', { name: 'Submit' });

    fireEvent.change(NameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      Name: 'John',
      email: 'johndoe@example.com'
    });
  });

  test('displays an error message for missing required fields', () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<BookingForm onSubmit={onSubmit} />);
    const submitButton = getByRole('button', { name: 'Submit' });

    fireEvent.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
    expect(getByRole('alert')).toHaveTextContent('Please fill out all required fields.');
  });
});