import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { HomeScreen } from "@screens";
import * as React from "react";

const HomeStack = createStackNavigator<any>();

export default () => {
  const generateScreenOptions = React.useCallback(
    ({}): StackNavigationOptions => ({
      headerRightContainerStyle: {
        paddingHorizontal: 8,
      },
      headerTitleAlign: "center",
    }),
    []
  );

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        // options={generateScreenOptions}
      />
    </HomeStack.Navigator>
  );
};