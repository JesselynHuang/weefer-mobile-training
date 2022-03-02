import React from "react";
import { PrimaryButton } from "./component";
import { useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function MainMenu(props) {
  function _toMap() {
    props.navigation.navigate("Map");
  }
  function _toNotification() {
    props.navigation.navigate("Notification");
  }
  function _toCamera() {
    props.navigation.navigate("Camera");
  }
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <PrimaryButton onPress={_toMap} title={"Map"}></PrimaryButton>
      <PrimaryButton
        onPress={_toNotification}
        title={"Notification"}
      ></PrimaryButton>
      <PrimaryButton onPress={_toCamera} title={"Camera"}></PrimaryButton>
    </View>
  );
}
