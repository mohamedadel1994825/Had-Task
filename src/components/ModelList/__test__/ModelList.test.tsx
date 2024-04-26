import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { ModelList } from "../index";

describe("ModelList", () => {
  const models = [
    { id: 1, name: "Model 1" },
    { id: 2, name: "Model 2" },
    { id: 3, name: "Model 3" },
  ];

  test("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <ModelList models={models} data={undefined} renderItem={undefined} />
    );
    const list = getByTestId("custom-list");
    expect(list).toBeDefined();

    // Check if model items are rendered
    models.forEach((model) => {
      const modelItem = getByText(model.name);
      expect(modelItem).toBeDefined();
    });
  });

  test("pull to refresh triggers onPullToRefresh function", async () => {
    const onPullToRefresh = jest.fn();
    const { getByTestId } = render(
      <ModelList
        models={models}
        onPullToRefresh={onPullToRefresh}
        refresh={true}
      />
    );
    const list = getByTestId("custom-list");
    fireEvent(list, "refresh");

    await waitFor(() => {
      expect(onPullToRefresh).toHaveBeenCalled();
    });
  });

  // Add more test cases as needed
});
