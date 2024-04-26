import { render } from "@testing-library/react-native";
import React from "react";
import { View } from "react-native";
import { Row } from "../index";

describe("Row", () => {
  test("renders correctly with children", () => {
    const { getByTestId } = render(
      <Row>
        <View testID="child-1" />
        <View testID="child-2" />
      </Row>
    );

    const rowComponent = getByTestId("row-component");
    expect(rowComponent).toBeDefined();

    const child1 = getByTestId("child-1");
    expect(child1).toBeDefined();

    const child2 = getByTestId("child-2");
    expect(child2).toBeDefined();
  });

  test("applies custom style", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <Row style={customStyle}>
        <View />
      </Row>
    );

    const rowComponent = getByTestId("row-component");
    expect(rowComponent).toHaveStyle(customStyle);
  });
});
