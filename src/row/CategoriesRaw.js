import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { textScale } from "../styles/responsiveStyles";
import { spacing } from "../styles/spacing";
const CategoriesRaw = ({ item, index, onPressCategory }) => {
    return (
        <View >
            <TouchableOpacity style={[styles.mainContainer, index == 0 && { marginLeft: spacing.MARGIN_16 }]} onPress={() => onPressCategory(item, index)}>
                <View style={styles.ImageBox}
                >
                    <Image style={styles.Image}
                        source={item.Image}
                    />
                </View>
                <Text style={styles.CategoryText}>{item.Category_Name}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: spacing.WIDTH_64,
        // marginLeft: spacing.MARGIN_20,
        marginRight: spacing.MARGIN_20,

    },
    ImageBox: {
        borderWidth: 1,
        height: spacing.HEIGHT_64,
        width: spacing.WIDTH_64,
        borderColor: 'lightgray',
        borderRadius: spacing.RADIUS_20,
        backgroundColor: '#f5f5f5',
    },
    Image: {
        alignSelf: 'center',
        marginTop: spacing.MARGIN_10,
        height: spacing.HEIGHT_40,
        width: spacing.WIDTH_40,
    },
    CategoryText: {
        alignSelf: 'center',
        marginTop: spacing.MARGIN_6,
        fontSize: textScale(10),
        fontWeight: '500',
    }
})


export default CategoriesRaw