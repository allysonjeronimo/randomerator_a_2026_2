import {View, Text, Image, StyleSheet} from "react-native"
import { Button} from "../button"
import Slider from "@react-native-community/slider"
import { useState } from "react"

export function PasswordGenerator(){

    const [size, setSize] = useState(20)

    function generate(){
        console.log("Gerando a senha...")
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{size} Caracteres</Text>
                
                <Slider 
                    style={styles.slider}
                    thumbTintColor="#00aeff"
                    minimumValue={6}
                    maximumValue={20}
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                    minimumTrackTintColor="#00aeff"
                    maximumTrackTintColor="#a9a9a9"
                />

                <Button
                    text="Gerar Senha"
                    onClick={generate}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        gap: 16,
        backgroundColor: "#a5a4a4",
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        width: 160,
        height: 160
    },
    content:{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        gap: 16
    },
    title:{
        fontSize: 28,
        fontWeight: "700",
        color: "#3e3e3e",
        textAlign: "center"
    },
    slider: {
        height: 20,
        width: "100%"
    }
})