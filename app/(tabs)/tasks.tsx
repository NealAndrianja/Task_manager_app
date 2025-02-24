import TaskListItem from "@/component/TaskListItem";
import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  description: string;
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
    description: "Buy milk, bread, and eggs",
  },
  {
    id: "2",
    title: "Finish React Native course",
    completed: false,
    description: "Finish the last 3 modules",
  },
  {
    id: "3",
    title: "Go to the gym later",
    completed: false,
    description: "Do 30 minutes of cardio",
  },
];

function TasksScreen() {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleUpdate = (item: Task) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === item.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks list overview</Text>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/task/[id]",
              params: {
                id: item.id,
                title: item.title,
                completed: item.completed.toString(),
                description: JSON.stringify(item.description),
              },
            }}
            asChild
          >
            <TouchableOpacity>
              <TaskListItem
                task={item}
                handleUpdate={() => handleUpdate(item)}
              />
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
  taskText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default TasksScreen;
