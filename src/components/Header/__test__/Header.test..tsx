import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Header } from "../index";

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

describe("Header", () => {
  test("renders correctly with title and canGoBack true", () => {
    const { getByText, getByTestId } = render(<Header title="Test Title" />);

    const backButton = getByTestId("back-button");
    expect(backButton).toBeDefined();

    const titleText = getByText("Test Title");
    expect(titleText).toBeDefined();
  });

  test("renders correctly with title and canGoBack false", () => {
    const { queryByTestId } = render(
      <Header title="Test Title" canGoBack={false} />
    );

    const backButton = queryByTestId("back-button");
    expect(backButton).toBeNull(); // Ensure the back button is not rendered
  });

  test("calls goBack function when back button is pressed", () => {
    const { getByTestId } = render(<Header title="Test Title" />);

    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);

    // Check if the goBack function is called
    expect(useNavigation().goBack).toHaveBeenCalled();
  });
});
