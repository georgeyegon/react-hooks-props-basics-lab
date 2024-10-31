// src/__tests__/About.test.js
import { render, screen } from "@testing-library/react";
import About from "../components/About"; // Ensure this path is correct
import '@testing-library/jest-dom';

describe("About Component", () => {
  test("renders a <p> element with the bio from props", () => {
    render(<About bio="I made this" links={{ github: '', linkedin: '' }} />);
    expect(screen.getByText("I made this")).toBeInTheDocument();
  });

  test("does not render a <p> element if the bio is not included in props", () => {
    const { container } = render(<About links={{ github: '', linkedin: '' }} />);
    expect(container.querySelector("p").textContent).toEqual("Put the bio in here");
  });

  test("does not render a <p> element if the bio is an empty string", () => {
    const { container } = render(<About bio="" links={{ github: '', linkedin: '' }} />);
    expect(container.querySelector("p").textContent).toEqual("Put the bio in here");
  });
});
