import { Text, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

export default function AboutScreen() {
    return (
        <View style={style.container}>
            <Text style={style.text}>About Screen</Text>
        </View>
    )
}