import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {textScale} from '../styles/responsiveStyles';
import {spacing} from '../styles/spacing';
const YourTaskRaw = ({item, index}) => {
  const [shouldShow, setshouldShow] = useState(false);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.mainContainer, index == 0 && {marginTop: 15}]}
        title="hide component"
        onPress={() => setshouldShow(!shouldShow)}>
        <View style={styles.Button}>
          {
            shouldShow ? ( // if true
              <Image
                source={require('../assets/tick.png')}
                style={styles.Tick}
              />
            ) : null // else nothing
          }
        </View>
        <Text style={styles.Task_Text}>{item.Task_Text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: spacing.MARGIN_16,
    marginBottom: spacing.MARGIN_20,
    paddingHorizontal: spacing.PADDING_20,
    flexDirection: 'row',
    height: spacing.HEIGHT_68,
    backgroundColor: '#f5f5f5',
    borderRadius: spacing.RADIUS_20,
    shadowColor: '00b0ff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 2,
  },
  Button: {
    height: spacing.HEIGHT_24,
    width: spacing.WIDTH_24,
    borderRadius: spacing.RADIUS_50,
    backgroundColor: '#b2ebf2',
    marginTop: spacing.MARGIN_22,
    // marginLeft: spacing.MARGIN_22,
  },
  Task_Text: {
    alignSelf: 'center',
    marginLeft: spacing.MARGIN_20,
    fontSize: textScale(15),
    fontWeight: '500',
  },
  Tick: {
    height: spacing.HEIGHT_20,
    width: spacing.WIDTH_20,
    alignSelf: 'center',
    // alignItems: 'center',
  },
});

export default YourTaskRaw;
