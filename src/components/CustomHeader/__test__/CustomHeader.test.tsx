import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CustomHeader } from "../index";

describe("CustomHeader", () => {
  test("renders correctly", () => {
    const { getByText } = render(<CustomHeader />);
    const headerText = getByText("Dimond Mall");
    expect(headerText).toBeDefined();
  });

  test("clicking on menu button should trigger event", () => {
    const handleMenuClick = jest.fn();
    const { getByLabelText } = render(
      <CustomHeader onMenuPress={handleMenuClick} />
    );
    const menuButton = getByLabelText("menu");
    fireEvent.press(menuButton);
    expect(handleMenuClick).toHaveBeenCalled();
  });

  test("clicking on search button should trigger event", () => {
    const handleSearchClick = jest.fn();
    const { getByLabelText } = render(
      <CustomHeader onSearchPress={handleSearchClick} />
    );
    const searchButton = getByLabelText("search");
    fireEvent.press(searchButton);
    expect(handleSearchClick).toHaveBeenCalled();
  });
});
