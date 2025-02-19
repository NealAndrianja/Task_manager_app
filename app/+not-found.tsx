import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const NotFound = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>404 - Screen Not Found</Text>
            <Text style={styles.paragraph}>Sorry, the page you are looking for does not exist.</Text>
            <Link href={"/(tabs)/index"}>Go back to Profile Page</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 15
    }
})

export default NotFound;