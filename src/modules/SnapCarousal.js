import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { windowWidth } from "../common/dimensions";
import SnapCarousalRaw from "../row/SnapCarousalRaw";
import { spacing } from "../styles/spacing";
const SnapCarousal = () => {
    const SnapCarousalImage = ({ item, index }) => {
        return <SnapCarousalRaw data={item} index={index} />
    }

    const sliderdata = [
        {
            title: 'First Image',
            image: require('../assets/slider_image9.jpg'),
        },
        {
            title: 'Secound Image',
            image: require('../assets/slider_image5.jpg'),
        },
        {
            title: 'Third Image',
            image: require('../assets/slider_image3.jpg'),
        },
        {
            title: 'Fourth Image',
            image: require('../assets/slider_image4.jpg'),
        },
        {
            title: 'Fifth Image',
            image: require('../assets/slider_image8.jpg'),
        },
        {
            title: 'Fifth Image',
            image: require('../assets/slider_image7.jpg'),
        },
    ]
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <ScrollView>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={sliderdata}
                        renderItem={SnapCarousalImage}
                        sliderWidth={spacing.FULL_WIDTH}
                        itemWidth={300}
                        loop={true}
                    />

                </ScrollView>
            </SafeAreaView>
        </View>
    )

}


const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // borderWidth: 2,
        marginTop: spacing.MARGIN_2,
        // marginLeft: spacing.MARGIN_22,
        // marginRight: spacing.MARGIN_22,
    }
})


export default SnapCarousal