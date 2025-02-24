import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function TaskDetailsScreen() {
  const { id, title, completed, description } = useLocalSearchParams();
  console.log({ id, title, completed, description });
  const parsedDescription = description || "No description available";

  const taskState = Boolean(completed === "true");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{parsedDescription}</Text>
      <Text style={styles.status}>
        Status: {taskState ? "✅ Completed" : "❌ Incomplete"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 16, color: "#aaa", marginBottom: 10 },
  status: { fontSize: 18, color: "#aaa", marginBottom: 10 },
  button: { padding: 10, backgroundColor: "#4CAF50", borderRadius: 5 },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  error: { fontSize: 20, color: "red" },
});

export default TaskDetailsScreen;
