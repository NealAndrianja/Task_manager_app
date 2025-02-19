import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.text}>Nom: John Doe</Text>
      <Text style={styles.text}>Email: johndoe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#25292e" },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  text: { fontSize: 18, color: "#fff" },
});
