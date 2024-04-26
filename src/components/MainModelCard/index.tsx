import { imagesUrl } from "@common";
import { useMovies } from "@hooks";
import { Model } from "@interfaces";
import React, { memo } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";
import { CustomImage } from "@components";

const MainModelCard: React.FC<Model> = memo(({}) => {
  const { movies, isLoading } = useMovies();
  const item = movies?.pages[3];
  const title = item?.title;
  const release_date = item?.release_date;
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <CustomImage
          testID="model-image"
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: `${imagesUrl}` + "/4woSOUD0equAYzvwhWBHIJDCM88.jpg" }}
          style={styles.container}
        >
          <TouchableOpacity testID="model-card">
            <Text style={styles.nameText}>{title}</Text>
            <Text style={styles.detailsText}>{release_date}</Text>
            {/* <Text style={styles.quantityText}>{quantity}</Text> */}
          </TouchableOpacity>
        </CustomImage>
      )}
    </View>
  );
});

export { MainModelCard };
