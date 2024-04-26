import { render } from "@testing-library/react-native";
import React from "react";
import { Loading } from "../index";

describe("Loading", () => {
  test("renders correctly with default props", () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId("loading-component");
    expect(loadingComponent).toBeDefined();

    const activityIndicator = getByTestId("activity-indicator");
    expect(activityIndicator).toBeDefined();
  });

  test("renders correctly with custom style and color", () => {
    const customStyle = { backgroundColor: "red" };
    const customColor = "blue";
    const { getByTestId } = render(
      <Loading style={customStyle} color={customColor} />
    );

    const loadingComponent = getByTestId("loading-component");
    expect(loadingComponent).toHaveStyle(customStyle);

    const activityIndicator = getByTestId("activity-indicator");
    expect(activityIndicator.props.color).toBe(customColor);
  });

  test("does not apply container style if isDisableContainerStyle is true", () => {
    const { getByTestId } = render(<Loading isDisableContainerStyle />);
    const loadingComponent = getByTestId("loading-component");
    expect(loadingComponent.props.style).toEqual({});
  });
});
