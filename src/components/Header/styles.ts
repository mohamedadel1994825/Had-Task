

import { Fonts } from '@assets';
import { appColors, appStyles, calcHeight } from '@common';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cont: {
        backgroundColor: appColors.appColor,
    },
    container: {
        marginTop: Platform.OS == 'android' ? 15 : 0,
        height: calcHeight(45),
        ...appStyles.centerItems,
    },
    back: {
        position: "absolute",
        left: 15,
        padding: 7,
    },
    title: {
        color: appColors.white,
        textAlign: "center",
        fontSize: 18,
        fontFamily: Fonts?.appColorBold,
    }

});
