import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { enableFreeze, enableScreens } from "react-native-screens";

import { useLoadConfigs } from "@hooks";
import { AppRootState, selectApp, useAppSelector } from "@store";
import { RootStackParamList } from "@types";
import { setNavigationRef } from "./navigation";
import TabsRouter from "./routers/tabs.router";
import { ScreenEnum } from "./screenEnums";
enableScreens(true);
enableFreeze(false);

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName={ScreenEnum.Home} // Use ScreenEnum values here
    screenOptions={() => ({
      gestureEnabled: false,
      // cardOverlayEnabled: true,
      headerShown: false,
      // detachPreviousScreen: true,
    })}
  >
    <Stack.Screen name="Tabs" component={TabsRouter} />
  </Stack.Navigator>
);

const RootNavigator = (props: any) => {
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);
  const appSelector: AppRootState = useAppSelector(selectApp);
  const { theme } = appSelector;
  useEffect(() => {
    setNavigationRef(navigationRef.current);
  }, []);
  useLoadConfigs();
  // The following lines were added for nesting the sidebar routes
  return (
    <NavigationContainer
      theme={{
        dark: theme?.name === "dark",
        colors: {
          appColor: theme?.appColor,
          background: theme?.background,
          text: theme?.text,
          card: theme?.card,
          border: theme?.border,
          notification: theme?.notification,
        },
      }}
      ref={setNavigationRef}
    >
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
