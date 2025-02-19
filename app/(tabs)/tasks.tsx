import { Link } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const tasks = [
  { id: "1", title: "Faire les courses" },
  { id: "2", title: "Réviser Expo Router" },
  { id: "3", title: "Aller à la salle de sport" },
];

function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks list overview</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/task/[id]",
              params: { id: item.id, title: item.title },
            }}
            asChild
          >
            <TouchableOpacity style={styles.task}>
              <Text style={styles.taskText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  task: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default TasksScreen;
