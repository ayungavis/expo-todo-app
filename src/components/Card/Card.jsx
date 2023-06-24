import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme";
import { MenuIcon } from "../Icons";

export const Card = ({ title, description, active }) => {
  return (
    <View style={[styles.container, active ?? styles.active]}>
      {/* Title & Icon */}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.icon}>
          <MenuIcon />
        </TouchableOpacity>
      </View>
      {/* Description */}
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 22,
    gap: 16,
  },
  active: {},
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "JosefinSans-Medium",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    color: colors.black,
  },
  description: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 14,
    lineHeight: 20,
    color: colors.gray,
  },
});
