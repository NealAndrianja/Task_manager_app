import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function TaskDetailsScreen() {
    const {id, title} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <Text style={styles.taskText}>
        ID: {id} | Title: {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  taskText: { fontSize: 18, color: "#fff" },
});

export default TaskDetailsScreen;
