import { StyleSheet, View, Pressable, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string,
    theme?: 'primary',
    onPress?: () => void
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})
const primaryTheme = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 18,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#25292e',
        fontSize: 16,
    }
})

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View style={primaryTheme.buttonContainer}>
                <Pressable style={primaryTheme.button} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={primaryTheme.buttonIcon}/>
                    <Text style={primaryTheme.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={style.buttonContainer}>
            <Pressable style={style.button} onPress={onPress}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}