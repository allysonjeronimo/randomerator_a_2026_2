import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react"
import {Button, BUTTON_TYPE_DANGER, BUTTON_TYPE_SECONDARY, BUTTON_TYPE_SUCCESS} from "../button"

export function Randomerator(){

    // [0] = variavel
    // [1] = função 

    let [value, setValue] = useState(100)

    function incrementar(){
        setValue(value + 1)
    }

    function decrementar(){
        setValue(value - 1)
    }

    function resetar(){
        setValue(0)
    }

    function randomizar(){
        const result = Math.floor((Math.random() * 100)) + 1
        setValue(result)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Randomerator</Text>

            <View style={styles.content}>

                <Text style={styles.result}>{value}</Text>

                <Button
                    text="Incrementar"
                    onClick={incrementar}
                />

                <Button
                    type={BUTTON_TYPE_SECONDARY}
                    text="Decrementar"
                    onClick={decrementar}
                />

                <Button
                    type={BUTTON_TYPE_DANGER}
                    text="Zerar"
                    onClick={resetar}
                />

                <Button
                    type={BUTTON_TYPE_SUCCESS}
                    text="Randomizar"
                    onClick={randomizar}
                />

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        backgroundColor: "#939393",
        padding: 16
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2d2d2d"
    },
    content:{
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
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
    }
   
})