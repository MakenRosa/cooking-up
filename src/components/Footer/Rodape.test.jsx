import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  it("should render the correct text", () => {
    render(<Footer />);

    const textElement = screen.getByText(
      "Desenvolvido por Alura | 2023 - Projeto fictício sem fins comerciais."
    );

    expect(textElement).toBeInTheDocument();
  });

  it("should have the correct text color", () => {
    render(<Footer />);

    const footerContainer = screen.getByTestId("footer-container");

    expect(footerContainer).toHaveStyle("color: var(--cream, #FFFAF3)");
  });
});