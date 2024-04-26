import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ShipmentsHeader } from '../index';

describe('ShipmentsHeader', () => {
  test('renders correctly with title', () => {
    const { getByText } = render(
      <ShipmentsHeader onPress={() => {}} title="Test Title" />
    );

    const titleText = getByText('Test Title');
    expect(titleText).toBeDefined();
  });

  test('calls onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ShipmentsHeader onPress={mockOnPress} title="Test Title" />
    );

    const header = getByText('Test Title');
    fireEvent.press(header);

    // Check if the onPress function is called
    expect(mockOnPress).toHaveBeenCalled();
  });
});
