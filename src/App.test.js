import { render, screen } from '@testing-library/react';
import App from './App';

test('renders one page portfolio with original information', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /harinder partap singh/i })).toBeInTheDocument();
  expect(screen.getByText(/currently working on/i)).toBeInTheDocument();
  expect(screen.getByText(/list of my projects/i)).toBeInTheDocument();
  expect(screen.getByText(/founded, developed/i)).toBeInTheDocument();
});
