import { appColors } from "@common";
import * as React from "react";
import { Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
export const BottomTabScreenOptions = () => {
  return {
    home: {
      tabBarColor: appColors.appColor,
      tabBarLabel: <Text style={styles.tabBarLabel}>INICO</Text>,
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name="grid-outline"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    categories: {
      tabBarLabel: <Text style={styles.tabBarLabel}>PROXIMITATE</Text>,
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name="play-circle-outline"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
    deals: {
      tabBarLabel: <Text style={styles.tabBarLabel} />,
      // tabBarIcon: middleAddIcon,
    },

    account: {
      tabBarLabel: <Text style={styles.tabBarLabel}>ENTRADAS</Text>,
      tabBarIcon: ({ color, focused }) => (
        <CommunityIcon
          name="account"
          size={24}
          color={focused ? appColors.appColor : color}
        />
      ),
    },
  };
};
