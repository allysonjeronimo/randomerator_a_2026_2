import { View, Text, Pressable, StyleSheet } from "react-native";

export function Randomerator(){
    return (
        <View>
            <Text style={styles.title}>Randomerator</Text>
            <Pressable style={styles.buttonPrimary}>
                <Text style={styles.buttonText}>Generate</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    },
    buttonPrimary:{
        backgroundColor: '#00aeff',
        padding: 8,
        borderRadius: 8,
    },
    buttonText:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    }
})