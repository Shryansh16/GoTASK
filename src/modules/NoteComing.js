import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {textScale} from '../styles/responsiveStyles';
import {spacing} from '../styles/spacing';
const NoteComing = ({item}) => {
  const {desc} = item;
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.TickContainer}
        title="hide component"
        onPress={() => setshouldShow(!shouldShow)}>
        {
          shouldShow ? ( // if true
            <Image source={require('../assets/tick.png')} style={styles.Tick} />
          ) : null // else nothing
        }
      </TouchableOpacity>
      <Text style={styles.Text} numberOfLines={3}>
        {desc}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#b2ebf2',
    width: 350,
    alignSelf: 'center',
    // height: spacing.HEIGHT_40,
    padding: spacing.PADDING_8,
    borderRadius: spacing.RADIUS_20,
    shadowColor: '00b0ff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
    // borderWidth: 4,
    marginBottom: spacing.MARGIN_16,
  },
  Text: {
    // marginLeft: spacing.MARGIN_4,
    // marginRight: spacing.MARGIN_4,
    marginHorizontal: spacing.MARGIN_4,
    fontSize: textScale(14),
    color: 'black',
    fontWeight: '400',
    // alignSelf: 'center',
  },
  TickContainer: {
    marginLeft: spacing.MARGIN_2,
    height: spacing.HEIGHT_24,
    width: spacing.WIDTH_24,
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_50,
    alignSelf: 'center',
  },
  Tick: {
    height: spacing.HEIGHT_16,
    width: spacing.WIDTH_16,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_4,
    // alignItems: 'center',
  },
});

export default NoteComing;
