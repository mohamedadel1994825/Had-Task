import { appColors } from "@common";
import React, { memo } from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface LoadingProps {
  style?: ViewStyle;
  color?: string;
  isDisableContainerStyle?: boolean;
}

const Loading: React.FC<LoadingProps> = memo(
  ({ isDisableContainerStyle, style, color }) => {
    return (
      <View
        style={[!isDisableContainerStyle ? styles.loadingContainer : {}, style]}
      >
        <ActivityIndicator size="small" color={color ?? appColors.white} />
      </View>
    );
  }
);

export { Loading };
