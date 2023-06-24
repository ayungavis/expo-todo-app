import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigations";

export const Main = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
