import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { spacing } from "../styles/spacing";
const HemburgerButton = ({ onPressButton }) => {
    return (
        <View style={styles.MainBox}>
            <TouchableOpacity style={styles.mainContainer} onPress={() => onPressButton()} >
                <Image style={styles.HemburgerImage}
                    source={require("../assets/hemburger_button2_image.jpg")}
                />

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: spacing.HEIGHT_34,
        width: spacing.WIDTH_34,
        borderRadius: spacing.RADIUS_10,
        marginLeft: spacing.MARGIN_16,
        marginTop: spacing.MARGIN_10,
        marginBottom: spacing.MARGIN_10,
    },
    HemburgerImage: {
        height: spacing.HEIGHT_14,
        width: spacing.WIDTH_20,
        marginTop: spacing.MARGIN_8,
        alignSelf: 'center',
    }
})


export default HemburgerButton