import React from 'react';
import { render } from '@testing-library/react-native';
import { EmptyComponent } from '../index';

describe('EmptyComponent', () => {
  test('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <EmptyComponent noDataText="No data available" />
    );
    const loadingComponent = getByTestId('loading-component');
    expect(loadingComponent).toBeDefined(); // Assuming you have a loading component with testID 'loading-component'

    // Simulate loading completion by waiting for a specific element to render
    const emptyComponent = getByText('No data available');
    expect(emptyComponent).toBeDefined();
  });

  // Add more test cases as needed
});
