import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import CategoriesRaw from '../row/CategoriesRaw';
import {spacing} from '../styles/spacing';

const Categories = ({categoryName}) => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      Image: require('../assets/suitcase.png'),
      Category_Name: 'Work',
    },
    {
      id: 2,
      Image: require('../assets/man.png'),
      Category_Name: 'Personal',
    },
    {
      id: 3,
      Image: require('../assets/shopping-cart.png'),
      Category_Name: 'Shopping',
    },
    {
      id: 4,
      Image: require('../assets/heart-beat.png'),
      Category_Name: 'Health',
    },
    {
      id: 5,
      Image: require('../assets/suitcase.png'),
      Category_Name: 'Work',
    },
    {
      id: 6,
      Image: require('../assets/man.png'),
      Category_Name: 'Personal',
    },
    {
      id: 7,
      Image: require('../assets/shopping-cart.png'),
      Category_Name: 'Shopping',
    },
    {
      id: 8,
      Image: require('../assets/heart-beat.png'),
      Category_Name: 'Health',
    },
  ];
  function onPressCategory(item) {
    navigation.navigate('CategoryScreen', {categoryName: item.Category_Name});
  }
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <CategoriesRaw
              item={item}
              index={index}
              onPressCategory={onPressCategory}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: spacing.MARGIN_20,
    // paddingRight: spacing.PADDING_10,
    // paddingLeft: spacing.PADDING_10,
  },
});

export default Categories;
