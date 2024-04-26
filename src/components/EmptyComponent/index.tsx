import { images } from "@assets";
import { appStyles } from "@common";
import { CustomImage, Loading } from "@components";
import { AppRootState, selectApp, useAppSelector } from "@store";
import { screenHeight, screenWidth } from "@utils";
import React, { memo, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface EmptyComponentProps {
  noDataText?: string;
}

export const EmptyComponent: React.FC<EmptyComponentProps> = memo(
  ({ noDataText }) => {
    const [isLoading, setIsLoading] = useState(true);
    const appSelector: AppRootState = useAppSelector(selectApp);
    const { theme } = appSelector;
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={{ marginTop: "30%", ...appStyles.alignSelfCenter }}>
            <CustomImage
              style={{ height: screenHeight * 0.3, width: screenWidth * 0.7 }}
              source={images.emptyData}
            />
            <Text style={styles(theme).ListEmptyComponent}>{noDataText}</Text>
          </View>
        )}
      </>
    );
  }
);
