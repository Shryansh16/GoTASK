import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {spacing} from '../styles/spacing';
import {textScale} from '../styles/responsiveStyles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerComponent = props => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <ImageBackground
          source={require('../assets/background-blue.jpg')}
          style={styles.ImageBackground}>
          <Image
            source={require('../assets/man.png')}
            style={styles.ProfileImage}
          />
          <Text style={styles.ProfileName}>Shryansh shree Gangwal</Text>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#8200d6',
  },
  ImageBackground: {
    padding: spacing.PADDING_20,
    // borderWidth: 2,
  },
  ProfileImage: {
    height: spacing.HEIGHT_80,
    width: spacing.WIDTH_80,
    borderRadius: 40,
    // marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  ProfileName: {
    color: '#fff',
    fontSize: textScale(14),
    marginTop: spacing.MARGIN_6,
    // fontFamily: 'Poppins-Bold',
  },
});

export default DrawerComponent;
