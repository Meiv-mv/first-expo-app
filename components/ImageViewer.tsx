import { StyleSheet } from 'react-native'
import { Image, type ImageSource } from 'expo-image';

type Props = {
    imgSrc: ImageSource,
    imgSelected?: string
}

const style = StyleSheet.create({
    image: {
        width: 320,
        height: 370,
        borderRadius: 18
    },
});

export default function ImageViewer({ imgSrc, imgSelected }: Props) {
    const imageSource= imgSelected ? { uri: imgSelected } : imgSrc;

    return (
        <Image source={imageSource} style={style.image} />
    )
}