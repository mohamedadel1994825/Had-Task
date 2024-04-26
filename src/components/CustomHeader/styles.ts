import { appColors } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'center',
  },
  headerCont: {
    borderBottomWidth: 0,
    backgroundColor: appColors.transparent
  },
  rightContainerStyle: {
  }
});
