import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme";
import { MenuIcon, PlusIcon } from "../Icons";
import { Image } from "expo-image";
import { images } from "../../constants/images";
import { useLinkTo } from "@react-navigation/native";

export const Header = () => {
  const linkTo = useLinkTo();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondary.shade1} />
      {/* Navigation */}
      <View style={styles.navigation}>
        {/* Menu Button */}
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.button}>
            {/* Icon */}
            <View style={styles.icon}>
              <MenuIcon />
            </View>
            <Text style={styles.menu}>Menu</Text>
          </TouchableOpacity>
          {/* Plus Icon */}
          <TouchableOpacity style={styles.plus} onPress={() => linkTo("/create")}>
            <PlusIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.avatar}>
          <Image source={images.avatar} style={styles.image} />
        </TouchableOpacity>
      </View>
      {/* Title & Description */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Increase your productivity</Text>
        <Text style={styles.title}>ToDo App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 26,
    paddingHorizontal: 20,
    backgroundColor: colors.secondary.shade1,
    justifyContent: "space-between",
    gap: 34,
    position: "relative",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 2,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    backgroundColor: colors.secondary.shade2,
    borderRadius: 50,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 20,
    gap: 12,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary.shade3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    color: colors.black,
  },
  menu: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "IBMPlexSans-Medium",
    lineHeight: 22,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: colors.secondary.shade3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 31.2,
  },
  content: {
    gap: 6,
  },
  title: {
    fontSize: 60,
    fontWeight: 500,
    lineHeight: 60,
    letterSpacing: -0.6,
    fontFamily: "JosefinSans-Medium",
  },
  subtitle: {
    color: colors.subtitle,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "JosefinSans-Medium",
    lineHeight: 16,
  },
  plus: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: colors.secondary.shade2,
    justifyContent: "center",
    alignItems: "center",
  },
});
