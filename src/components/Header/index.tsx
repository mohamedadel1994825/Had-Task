import { Row } from "@components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
// import { goBack } from "@navigation";
import i18n from "i18n-js";
import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

interface CustomHeaderProps {
  title: string;
  canGoBack?: boolean;
}

const Header: React.FC<CustomHeaderProps> = memo(
  ({ title, canGoBack = true }) => {
    const { goBack } = useNavigation();
    const onPressBack = useCallback(() => {
      goBack();
    }, []);
    return (
      <View style={styles.cont}>
        <Row style={styles.container}>
          {canGoBack && (
            <TouchableOpacity style={styles.back} onPress={onPressBack}>
              {i18n.currentLocale() == "en" ? (
                <IconMaterial name="arrow-back-ios" color="white" size={22} />
              ) : (
                <IconMaterial
                  name="arrow-forward-ios"
                  color="white"
                  size={22}
                />
              )}
            </TouchableOpacity>
          )}
          {title && <Text style={styles.title}>{title}</Text>}
        </Row>
      </View>
    );
  }
);

export { Header };
