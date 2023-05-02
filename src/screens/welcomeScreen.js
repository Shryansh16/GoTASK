import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartButton from "../modules/StartButton";
import WelcomeImage from "../modules/WelcomeImage";
import WelcomeText from "../modules/WelcomeText";
import { textScale } from "../styles/responsiveStyles";
import { spacing } from "../styles/spacing";

const WelcomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.AppName}>
                <Text style={styles.GoTask}>GoTask</Text>
            </View>
            <WelcomeImage />
            <WelcomeText />
            <StartButton />
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        // borderWidth: 2,
    },
    AppName: {
        alignSelf: 'center',
        marginTop: spacing.MARGIN_18,


    },
    GoTask: {
        fontSize: textScale(34),
        // color: '#40c4ff',
        color: '#0091ea',
        fontFamily: 'JosefinSans-Italic',
    }
})

export default WelcomeScreen