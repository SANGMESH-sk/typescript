import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders Main component and check for text is present', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Powered by API 2.0 Weather API/i);
  expect(linkElement).toBeInTheDocument();
});