import { Fonts } from '@assets';
import { appColors, calcFont, calcHeight, calcWidth } from '@common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eff8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: "100%",
    // marginBottom: 5,
  },
  nameText: {
    fontSize: calcFont(16),
    color: appColors.white,
    fontWeight: Fonts?.appColorBold

  },
  detailsText: {
    marginBottom: 2,
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
  availableProductsText: {
    marginBottom: 2,
    fontSize: 10,
  },
  quantityText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
});
