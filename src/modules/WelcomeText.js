import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { textScale } from "../styles/responsiveStyles";
import { spacing } from "../styles/spacing";
const WelcomeText = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.Heading}> Welcome To GoTask</Text>
            <View style={styles.ParaContainer}>
                <Text style={styles.Paragraph}>GoTask will help you to stay organized and perform your </Text>
                <Text style={styles.Paragraph2}>tasks mush faster.</Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        marginTop: spacing.MARGIN_16,
    },
    Heading: {
        alignSelf: 'center',
        color: 'black',
        fontSize: textScale(23),
        fontWeight: '600',
    },
    ParaContainer: {
        alignSelf: 'center',
        marginTop: spacing.MARGIN_8,
        marginLeft: spacing.MARGIN_8,
        // width: spacing.WIDTH_240,
        width: 240,


    },
    Paragraph: {
        fontSize: textScale(15),
    },
    Paragraph2: {
        fontSize: textScale(15),
        marginLeft: spacing.MARGIN_30,
    }
})


export default WelcomeText