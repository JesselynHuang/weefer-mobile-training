import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./MainMenu";
import Camera from "./screens/Camera";
import Map from "./screens/Map";
import Notification from "./screens/Notification";

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"MainMenu"}
        screenOptions={({ navigation }) => ({
          headerBackImage: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 8 }}
              >
                <Image source={require("./assets/images/back-black-24.png")} />
              </TouchableOpacity>
            );
          },
        })}
      >
        <Stack.Screen
          name={"MainMenu"}
          component={MainMenu}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Map"}
          component={Map}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Notification"}
          component={Notification}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name={"Camera"} component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
