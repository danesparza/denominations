import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders more button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/More/i);
  expect(buttonElement).toBeInTheDocument();
});
