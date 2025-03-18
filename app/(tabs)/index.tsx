import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

// imported components
import ImageViewer from '@/components/ImageViewer'
import Button from '@/components/buttons/Button'

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
    footerContainer: {
        flex: 1/3,
        alignItems: "center"
    }
})

export default function Index() {
    const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

    async function pickImageAsync() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            setSelectedImg(result.assets[0].uri)
            setShowAppOptions(true)
        } else {
            alert("You did not select any image")
        }
    }

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <ImageViewer imgSrc={PlaceholderImage} imgSelected={selectedImg} />
            </View>
            {showAppOptions ? (<View />) :
                (
                    <View>
                        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}></Button>
                        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}></Button>
                        <Button label="Reset photo" onPress={() =>  setSelectedImg(undefined)}></Button>
                    </View>
                )}
        </View>
    );
}
