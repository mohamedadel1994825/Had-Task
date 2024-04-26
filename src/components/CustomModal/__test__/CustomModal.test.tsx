import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { CustomModal } from "../index";

describe("CustomModal", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <CustomModal
        testID="custom-modal"
        // Pass any required props
      >
        {/* Add children components if needed */}
        <Text>Modal Content</Text>
      </CustomModal>
    );
    const modal = getByTestId("custom-modal");
    expect(modal).toBeDefined();
  });

  // Add more test cases as needed
});
