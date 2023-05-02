import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { spacing } from "../styles/spacing";
const WelcomeImage = () => {
    return (
        <View style={styles.ImageContainer}>
            <Image style={styles.MainImage}
                source={require("../assets/GOTaskWelcomeImage.webp")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    ImageContainer: {
        alignSelf: 'center',
        marginTop: spacing.MARGIN_84,
        marginBottom: 0,
        // borderWidth: 2,
    },
    MainImage: {
        height: spacing.HEIGHT_270,
        width: spacing.HEIGHT_350,
    }
})


export default WelcomeImage