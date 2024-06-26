import { appColors } from "@common";
import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "./styles";
interface CustomHeaderProps {
  title:string
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: appColors.white }}
        centerComponent={{
          text:title,
          style: { color: appColors.white },
          iconStyle: {
            color: appColors.white,
          },
        }}
        rightContainerStyle={styles.rightContainerStyle}
        rightComponent={{ icon: "search", color: appColors.white }}
        statusBarProps={{
          backgroundColor: appColors.transparent,
          translucent: true,
        }}
        backgroundColor={appColors.appColor}
        containerStyle={styles.headerCont}
      />
    </View>
  );
};

export { CustomHeader };
