import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./page";

describe("Login", () => {
 
  test("submits the correct data", () => {
    const handleSubmit = jest.fn();
    render(<Login onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });

    // describe('and then submits the form', () => {
    //   beforeEach(() => {
        //fireEvent.submit(screen.getByTestId('custom-form'));
    fireEvent.click(screen.getByText(/login/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      username: "testuser",
      password: "password",
    });
  });
});
