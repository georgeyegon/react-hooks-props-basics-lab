// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

describe("App Component", () => {
  test("passes 'name', 'city', and 'color' to <Home> as props", () => {
    render(<App />);
    const h1 = screen.getByText(/Liza is a Web Developer from New York/i);
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveStyle({ color: 'firebrick' });
  });

  test("passes 'bio' to <About> as a prop", () => {
    render(<App />);
    const p = screen.getByText("I made this!");
    expect(p).toBeInTheDocument();
    expect(p.tagName).toEqual("P");
  });

  test("passes 'github' to <Links> as a prop", () => {
    render(<App />);
    const a = screen.getByText("GitHub");
    expect(a).toBeInTheDocument();
    expect(a.tagName).toEqual("A");
  });

  test("passes 'linkedin' to <Links> as a prop", () => {
    render(<App />);
    const a = screen.getByText("LinkedIn");
    expect(a).toBeInTheDocument();
    expect(a.tagName).toEqual("A");
  });
});
