import { View, StyleSheet} from "react-native";
import { Link, Stack } from "expo-router"

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: "Oops! Not found"}} />
            <View style={style.container}>
                <Link href="/(tabs)/index" style={style.button}>About screen
                    Go back to Home screen!
                </Link>
            </View>
        </>
    )
}