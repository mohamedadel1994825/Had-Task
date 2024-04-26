import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import { styles } from "./styles"; // Import your styles from the styles file

interface CustomListProps<T> extends FlatListProps<T> {}

const CustomList = <T,>({ ...props }: CustomListProps<T>): JSX.Element => {
  return (
    <View>
      <FlatList
        {...props}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.customListContent}
        style={styles.cont}
      />
    </View>
  );
};

export { CustomList };
