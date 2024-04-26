import {
  CustomHeader,
  MainModelCard,
  ModelList,
  ShipmentsHeader,
} from "@components";
import { useGenres, useOnfocusedHomeStatusBar } from "@hooks";
import { translate } from "@language";
import { navigate } from "@navigation";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const onPress = (second) => {
    navigate("Genres");
  };
  const { genres } = useGenres();
  console.log("genres", genres);
  return (
    <View style={styles.container}>
      <CustomHeader
      // leftImageSource={image}
      // centerImageSource={images.shipexBlue}
      // notificationIcon={"notifications-outline"}
      // userName={userName + " " + userSurname}
      />
      <MainModelCard />
      <ShipmentsHeader {...{ onPress }} title={translate("See All")} />
      <ModelList
        horizontal={true}
        models={genres?.data?.genres?.slice(1, 15)}
      />
    </View>
  );
};

export { HomeScreen };
