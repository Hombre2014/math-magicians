import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math magicians link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math magicians/i);
  expect(linkElement).toBeInTheDocument();
});
