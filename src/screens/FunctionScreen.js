import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Categories from '../modules/Categories';
import HemburgerButton from '../modules/HemburgerButton';
import SnapCarousal from '../modules/SnapCarousal';
import YourTask from '../modules/YourTask';
import {textScale} from '../styles/responsiveStyles';
import {spacing} from '../styles/spacing';
const FunctionScreen = () => {
  const navigation = useNavigation();
  function onPressButton() {
    navigation.openDrawer();
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.HeaderContainer}>
        <HemburgerButton onPressButton={onPressButton} />
        <Text style={styles.GoTask}>GoTask</Text>
      </View>
      <ScrollView>
        <Text style={styles.Mangetime_text}>Quotes of the Day</Text>

        <SnapCarousal />

        <Text style={styles.categories_text}>Categories</Text>

        <Categories />

        <Text style={styles.categories_text}>Your Tasks</Text>

        <YourTask />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderContainer: {
    flexDirection: 'row',
    // alignSelf: 'center',
  },
  GoTask: {
    fontSize: textScale(24),
    color: '#0091ea',
    alignSelf: 'center',
    fontFamily: 'JosefinSans-Italic',
    marginLeft: spacing.MARGIN_100,
  },
  Mangetime_text: {
    alignSelf: 'center',
    fontSize: textScale(14),
    fontWeight: '300',
    color: 'black',
    marginTop: spacing.MARGIN_18,
    marginBottom: spacing.MARGIN_8,
    fontFamily: 'Poppins-BlackItalic',
  },
  categories_text: {
    fontSize: textScale(18),
    fontWeight: '800',
    color: 'black',
    marginLeft: spacing.MARGIN_16,
    marginTop: spacing.MARGIN_24,
    fontFamily: 'JosefinSans-Italic',
  },
});

export default FunctionScreen;
