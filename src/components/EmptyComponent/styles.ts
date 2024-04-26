import { StyleSheet } from "react-native";

export const styles = (theme: { text: string }) => StyleSheet.create({
    ListEmptyComponent: {
        fontSize: 21, marginTop: 50,
        color: theme.text,
        textAlign: 'center',
    }
})