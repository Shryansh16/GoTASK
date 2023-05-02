import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { width } from "../styles/responsiveStyles";
import { spacing } from "../styles/spacing";
const SnapCarousalRaw = ({ data, index }) => {


    return (
        <View style={[styles.mainContainer, index == 0 && { marginLeft: spacing.MARGIN_16 }]}>
            <Image source={data.image}
                style={styles.ImageContainer}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    mainContainer: {
        marginRight: spacing.MARGIN_16
    },
    ImageContainer: {
        height: spacing.HEIGHT_160,
        width: spacing.WIDTH_300 - (spacing.MARGIN_16 * 2),
        // width: 300,
        borderRadius: spacing.RADIUS_10,
        resizeMode: 'cover',


    }
})


export default SnapCarousalRaw