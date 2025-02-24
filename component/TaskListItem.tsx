import { StyleSheet, Task, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";

interface TaskListItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
  handleUpdate: () => void;
}

function TaskListItem({ task, handleUpdate }: TaskListItemProps) {
  const { id, title, completed } = task;
  return (
    <View style={styles.container}>
      <View style={styles.viewGroup}>
        <Checkbox value={completed} onValueChange={handleUpdate} 
          color={completed ? '#4CAF50' : undefined}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  viewGroup : {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    marginLeft: 10,
  },
  task: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  }
});

export default TaskListItem;
