import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tasks"
        options={{
          headerTitle: "Tasks",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default _layout;
