import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
interface ShipmentsHeaderProps {
  onPress: () => void;
  title: string;
}

const ShipmentsHeader: React.FC<ShipmentsHeaderProps> = ({
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { ShipmentsHeader };
