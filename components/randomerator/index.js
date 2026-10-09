import { View, Text, Pressable, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider'

export function Randomerator(){
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Randomerator</Text>

            <View style={styles.content}>

                <Text style={styles.result}>100</Text>

                <Text style={styles.textInterval}>1</Text>

                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={100}
                    thumbTintColor={"#00aeff"}
                    minimumTrackTintColor={"#00aeff"}
                    maximumTrackTintColor={"#ccc"}
                />

                <Text style={styles.textInterval}>100</Text>

                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={100}
                    thumbTintColor={"#00aeff"}
                    minimumTrackTintColor={"#00aeff"}
                    maximumTrackTintColor={"#ccc"}
                />

                <Pressable style={styles.buttonPrimary}>
                    <Text style={styles.buttonText}>Generate</Text>
                </Pressable>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 32
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2d2d2d"
    },
    content:{
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16
    },
    result:{
        fontSize: 48,
        color: "#2d2d2d",
        fontWeight: 600
    },
    textInterval:{
        fontSize: 22,
        color: "#2d2d2d"
    },
    slider:{
        height: 30,
        width: "100%"
    },
    buttonPrimary:{
        backgroundColor: '#00aeff',
        padding: 8,
        borderRadius: 8,
        width: "100%"
    },
    buttonText:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    }
})