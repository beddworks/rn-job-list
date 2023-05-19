import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },
  filterHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterHeadText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    letterSpacing: 0.5,
  },
  buttonView: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
