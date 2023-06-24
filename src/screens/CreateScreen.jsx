import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme";

export const CreateScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Container */}
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <View style={styles.wrapper}>
          <Text style={styles.title}>Add new to-do</Text>
          <Text style={styles.subtitle}>Please input your to-do below</Text>
        </View>
        {/* Form */}
        <View style={styles.form}>
          {/* Title */}
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} />
          {/* Description */}
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create new to-do</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  container: {},
  navigation: {},
  wrapper: {},
  title: {},
  subtitle: {},
  form: {},
  label: {},
  input: {},
  button: {
    backgroundColor: colors.primary.shade1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "JosefinSans-Medium",
    fontWeight: 500,
    lineHeight: 14,
    letterSpacing: -0.14,
  },
});
