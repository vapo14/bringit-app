import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Svg, Rect, Path } from "react-native-svg";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
  headerShape: {
    backgroundColor: "#05a457",
    height: 200,
    aspectRatio: "3/2",
  },
  signInFormContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  headerTitle: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 24,
    fontWeight: "500",
  },
});

export default function SignInScreen() {
  return (
    <View>
      <View style={styles.headerShape}>
        <Svg id="visual" viewBox="0 0 540 960" width="540" height="960">
          <Rect x="0" y="0" width="540" height="960" fill="#fff"></Rect>
          <Path
            d="M0 298L15 295.5C30 293 60 288 90 283.7C120 279.3 150 275.7 180 283.5C210 291.3 240 310.7 270 321.8C300 333 330 336 360 335.5C390 335 420 331 450 315C480 299 510 271 525 257L540 243L540 0L525 0C510 0 480 0 450 0C420 0 390 0 360 0C330 0 300 0 270 0C240 0 210 0 180 0C150 0 120 0 90 0C60 0 30 0 15 0L0 0Z"
            fill="#05a457"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></Path>
        </Svg>
      </View>
      <View style={styles.signInFormContainer}>
        <Text style={styles.headerTitle}>Sign In</Text>
        <SignInForm></SignInForm>
      </View>
    </View>
  );
}
