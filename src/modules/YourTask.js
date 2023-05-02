import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import YourTaskRaw from "../row/YourTaskRaw";
import { spacing } from "../styles/spacing";
const YourTask = () => {
    const DATA = [
        {
            id: 1,
            Task_Text: 'Daily UI Challenge',
        },
        {
            id: 2,
            Task_Text: 'Daily UI Challenge',
        },
        {
            id: 3,
            Task_Text: 'Daily UI Challenge',
        },
        {
            id: 4,
            Task_Text: 'Daily UI Challenge',
        },
        {
            id: 5,
            Task_Text: 'Daily UI Challenge',
        },
        {
            id: 6,
            Task_Text: 'Daily UI Challenge',
        },
    ]


    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item, index }) => {
                    return (
                        <YourTaskRaw item={item} index={index}
                        />
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // marginTop: spacing.MARGIN_20,

    },
})


export default YourTask