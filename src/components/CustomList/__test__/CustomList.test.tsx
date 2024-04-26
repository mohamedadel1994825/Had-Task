import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomList } from '../index';

describe('CustomList', () => {
  const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }];

  test('renders correctly', () => {
    const { getByTestId } = render(<CustomList data={data} />);
    const flatList = getByTestId('custom-list');
    expect(flatList).toBeDefined();
  });

  // Add more test cases as needed
});
