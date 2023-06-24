import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "../components/Card";
import { colors } from "../theme";

const DATA = [
  {
    id: 1,
    title: "First Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
  },
  {
    id: 2,
    title: "Second Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
  },
  {
    id: 3,
    title: "Third Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
  },
  {
    id: 4,
    title: "Fourth Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
  },
  {
    id: 5,
    title: "Fifth Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
  },
];

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        data={DATA}
        renderItem={({ item }) => <Card title={item.title} description={item.description} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.space} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    backgroundColor: colors.white,
  },
  space: {
    height: 20,
  },
});
