import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="task/[id]" options={{ headerTitle: "Task details"}}/>
      <Stack.Screen name="+not-found" options={{ headerTitle: "Not Found"}}/>
    </Stack>
  );
}
