import { render } from "@testing-library/react-native";
import React from "react";
import { CustomImage } from "../index";

describe("CustomImage", () => {
  const imageSource = require("./test-image.png"); // Sample image source

  test("renders Image component without tintColor", () => {
    const { getByTestId } = render(<CustomImage source={imageSource} />);
    const imageComponent = getByTestId("image-component");
    expect(imageComponent).toBeTruthy();
  });

  test("renders FastImage component with tintColor", () => {
    const { getByTestId } = render(
      <CustomImage source={imageSource} tintColor="red" />
    );
    const fastImageComponent = getByTestId("fast-image-component");
    expect(fastImageComponent).toBeTruthy();
  });

  test("renders FastImage component with custom resizeMode", () => {
    const { getByTestId } = render(
      <CustomImage source={imageSource} resizeMode="cover" />
    );
    const fastImageComponent = getByTestId("fast-image-component");
    expect(fastImageComponent).toBeTruthy();
  });

  // Add more test cases as needed
});
