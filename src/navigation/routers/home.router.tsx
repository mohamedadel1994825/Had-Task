import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { MoviesScreen, HomeScreen } from "@screens";
import { ScreenEnum } from "@navigation";
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
        name={ScreenEnum.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
        // options={generateScreenOptions}
      />
      <HomeStack.Screen
        name={ScreenEnum.Movies}
        component={MoviesScreen}
        options={{ headerShown: false }}
        // options={generateScreenOptions}
      />
    </HomeStack.Navigator>
  );
};
