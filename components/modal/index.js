import {View, Text, StyleSheet} from "react-native"
import { Button, BUTTON_TYPE_SECONDARY, BUTTON_TYPE_SUCCESS } from "../button"

export default function PasswordModal({password, onClose}){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Text style={styles.password}>{password}</Text>
                <Button type={BUTTON_TYPE_SUCCESS} text="Copiar" onClick={onClose}/>
                <Button type={BUTTON_TYPE_SECONDARY} text="Voltar" onClick={onClose}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        width: "80%",
        gap: 16
    },
    title:{
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        color: "#3e3e3e"
    },
    password: {
        fontSize: 26,
        textAlign: "center",
        color: "#979797"
    }
})