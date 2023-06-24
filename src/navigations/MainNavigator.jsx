import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { useColorScheme } from "react-native";
import { colors } from "../theme";
import { CreateScreen } from "../screens/CreateScreen";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const colorScheme = useColorScheme();
  const darkTheme = colorScheme === "dark";

  const options = {
    headerShown: false,
    statusBarStyle: darkTheme ? "light" : "dark",
    statusBarColor: darkTheme ? colors.black : colors.white,
    statusBarTranslucent: true,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} component={HomeScreen} name="home" />
      <Stack.Screen options={options} component={CreateScreen} name="create" />
    </Stack.Navigator>
  );
};
