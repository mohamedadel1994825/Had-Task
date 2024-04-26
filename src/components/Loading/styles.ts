

import { appStyles } from '@common';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    loadingContainer: {
        ...appStyles.flex1,
        ...appStyles.centerItems,
    },
    loading: {
        height: 30,
        width: 30,
    },
});


