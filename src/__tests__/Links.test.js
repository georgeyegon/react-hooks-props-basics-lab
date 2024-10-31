// src/__tests__/Links.test.js
import { render, screen } from "@testing-library/react";
import Links from "../components/Links"; // Adjust the path if necessary
import '@testing-library/jest-dom';

describe("Links Component", () => {
  const mockLinks = {
    github: 'https://github.com/user',
    linkedin: 'https://linkedin.com/in/user',
  };

  test("renders the h3 with the text 'Links'", () => {
    render(<Links links={mockLinks} />);
    expect(screen.getByText("Links")).toBeInTheDocument();
  });

  test("renders GitHub link", () => {
    render(<Links links={mockLinks} />);
    const githubLink = screen.getByText(/github/i);
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockLinks.github);
  });

  test("renders LinkedIn link", () => {
    render(<Links links={mockLinks} />);
    const linkedinLink = screen.getByText(/linkedin/i);
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', mockLinks.linkedin);
  });
});
