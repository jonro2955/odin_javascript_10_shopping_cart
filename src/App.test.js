import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Test Homepage', () => {
  it('check correct heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Welcome to Spectrum' })
    ).toBeInTheDocument();
  });

  test('renders Shop link1', () => {
    render(<App />);
    const linkElement = screen.getAllByText("Shop")[0];
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Shop link2', () => {
    render(<App />);
    const linkElement = screen.getAllByText('Shop')[1];
    expect(linkElement).toHaveStyle('height:', '300px');
  });
});

