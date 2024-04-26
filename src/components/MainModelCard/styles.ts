import { Fonts } from '@assets';
import { appColors, calcFont, calcHeight } from '@common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.appColor,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: calcHeight(400),
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: "100%",
    // marginBottom: 5,
  },
  nameText: {
    marginTop: 150,
    fontSize: calcFont(32),
    color: appColors.white,
    fontFamily: Fonts?.appColorBold,
    // fontWeight: '700'

  },
  detailsText: {
    marginBottom: 2,
    fontSize: calcFont(18),
    fontWeight: '400',
    color: appColors.appYellow,
    textAlign: 'center'
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
