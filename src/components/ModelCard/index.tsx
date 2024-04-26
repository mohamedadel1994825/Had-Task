import { calcHeight, calcWidth, imagesUrl } from "@common";
import { Model } from "@interfaces";
import { useRoute } from "@react-navigation/native";
import React, { memo } from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
import { CustomImage } from "@components";

const ModelCard: React.FC<Model> = memo(({ item }) => {
  const { backdrop_path } = item;
  const name = item?.name ? item?.name : item?.title;
  console.log("item", item);
  const route = useRoute();
  const isHomeScreen = route.name == "Home";
  const customStyle = {
    width: isHomeScreen ? calcWidth(150) : calcWidth(355),
    height: isHomeScreen ? calcHeight(210) : calcHeight(150),
    marginBottom: isHomeScreen ? calcHeight(10) : calcHeight(20),
  };
  const customTitleStyle = {
    marginTop: isHomeScreen ? calcHeight(150) : calcHeight(100),
  };
  return (
    <TouchableOpacity testID="model-card">
      <CustomImage
        testID="model-image"
        resizeMode={FastImage.resizeMode.cover}
        source={{ uri: `${imagesUrl}` + "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg" }}
        style={[styles.container, customStyle]}
      >
        <Text style={[styles.nameText, customTitleStyle]}>{name}</Text>
      </CustomImage>
    </TouchableOpacity>
  );
});

export { ModelCard };
