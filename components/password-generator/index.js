import {View, Text, Image, StyleSheet, Modal} from "react-native"
import { Button} from "../button"
import Slider from "@react-native-community/slider"
import { useState } from "react"
import PasswordModal from "../modal"

const charset = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()_+{}[]|:;<>,.?/~`-="

export function PasswordGenerator(){

    const [size, setSize] = useState(20)
    const [isModalVisible, setModalVisible] = useState(false)
    const [password, setPassword] = useState("")

    function generate(){
        let value = ""
        for(let i = 0; i < size; i++){
            let randomIndex = Math.floor(Math.random() * charset.length)
            value += charset.charAt(randomIndex)
        }
        setPassword(value)
        setModalVisible(true)
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
                    minimumValue={4}
                    maximumValue={12}
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


            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <PasswordModal password={password} onClose={() => setModalVisible(false)}/>
            </Modal>

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