import {Pressable, Text, StyleSheet} from "react-native"

export const BUTTON_TYPE_PRIMARY = "primary"
export const BUTTON_TYPE_SECONDARY = "secondary"
export const BUTTON_TYPE_SUCCESS = "success"
export const BUTTON_TYPE_DANGER = "danger"

export function Button({type = BUTTON_TYPE_PRIMARY, text, onClick}){
    
    const styleTypes = {
        [BUTTON_TYPE_PRIMARY] : styles.buttonPrimary,
        [BUTTON_TYPE_SECONDARY] : styles.buttonSecondary,
        [BUTTON_TYPE_SUCCESS] : styles.buttonSuccess,
        [BUTTON_TYPE_DANGER] : styles.buttonDanger
    }
    
    return (
        <Pressable style={styleTypes[type]} onPress={onClick}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonPrimary:{
        backgroundColor: '#00aeff',
        padding: 8,
        borderRadius: 8,
        width: "100%"
    },
    buttonSecondary:{
        backgroundColor: '#979797',
        padding: 8,
        borderRadius: 8,
        width: "100%"
    },
    buttonSuccess:{
        backgroundColor: '#2a9362',
        padding: 8,
        borderRadius: 8,
        width: "100%"
    },
    buttonDanger:{
        backgroundColor: '#9c2934',
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