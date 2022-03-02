import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function PrimaryButton(props) {
  const { title, onPress, disabled, style, textStyle, icon } = props;
  const buttonBg = disabled ? styles.disabledButton : styles.primaryButton;
  const textStyling = disabled ? styles.disabledButtonText : styles.txtStyle;
  return (
    <TouchableOpacity
      style={[styles.container, buttonBg, style]}
      disabled={disabled}
      onPress={() => onPress()}
    >
      {icon && <IconLeft icon={icon} />}
      <Text
        style={[styles.txtStyle, { color: "#fff" }, textStyling, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    flexDirection: "row",
    borderRadius: 4,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  primaryButton: {
    backgroundColor: "#0096FF",
  },
  disabledButton: {
    backgroundColor: "#C4C4C4",
  },
  disabledButtonText: {
    color: "#fff",
  },

  txtStyle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
