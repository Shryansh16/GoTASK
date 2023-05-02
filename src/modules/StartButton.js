import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textScale } from "../styles/responsiveStyles";
import { spacing } from "../styles/spacing";
import { useNavigation } from "@react-navigation/native";

const StartButton = () => {
    const navigation = useNavigation()
    function onPressButton() {
        navigation.navigate('Drawer', { from: 'WelcomeScreen' })
    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.Button} onPress={() => onPressButton()}>
                <Text style={styles.Get_started}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        alignSelf: 'center',
        // borderWidth: 2,
        marginTop: spacing.MARGIN_150,
    },
    Button: {
        backgroundColor: '#00b0ff',
        height: spacing.HEIGHT_54,
        width: spacing.WIDTH_296,
        borderRadius: 14,
        shadowColor: "00b0ff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    Get_started: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: textScale(20),
        marginTop: spacing.MARGIN_8,
    }
})


export default StartButton