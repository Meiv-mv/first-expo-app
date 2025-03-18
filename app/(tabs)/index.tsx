import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/background-image.png');

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})

export default function Index() {
  return (
    <View style={style.container}>
        <View style={style.imageContainer}>
            <Image source={PlaceholderImage} style={style.image} />
        </View>
    </View>
  );
}
