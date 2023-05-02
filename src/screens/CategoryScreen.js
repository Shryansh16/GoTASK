import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {textScale} from '../styles/responsiveStyles';
import {spacing} from '../styles/spacing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteModel from '../model/noteModel';
import NoteComing from '../modules/NoteComing';
const CategoryScreen = ({route}) => {
  const {params} = route;
  const {categoryName} = params;
  // console.log(categoryName);
  // console.log(route);
  const navigation = useNavigation();
  const [modelVisible, setmodelVisible] = useState(false);
  const [notes, setnotes] = useState([]);
  const findNotes = async () => {
    const categoryRes = await AsyncStorage.getItem(categoryName);
    if (categoryRes !== null) setnotes(JSON.parse(categoryRes));
    console.log(categoryRes);
  };

  useEffect(() => {
    findNotes();
  }, []);
  const handleOnSubmit = async desc => {
    const note = {id: Date.now(), desc, time: Date.now()};
    const updatedNotes = [...notes, note];
    setnotes(updatedNotes);
    await AsyncStorage.setItem(categoryName, JSON.stringify(updatedNotes));
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity title="Go back" onPress={() => navigation.goBack()}>
        <Image source={require('../assets/arrow.png')} style={styles.Arrow} />
      </TouchableOpacity>

      {/* <TextInput
          style={styles.TextInput}
          cursorColor={'lightblue'}
          multiline
          autoFocus={true}
        /> */}
      <FlatList
        data={notes}
        // numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NoteComing item={item} />}
      />

      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => setmodelVisible(true)}>
        <Image
          source={require('../assets/Plus-Symbol-Vector-PNG-Picture.png')}
          style={styles.AddImage}
        />
      </TouchableOpacity>
      <NoteModel
        visible={modelVisible}
        onClose={() => setmodelVisible(false)}
        onsubmit={handleOnSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    marginHorizontal: spacing.MARGIN_16,
    // zIndex: -1,
  },
  Arrow: {
    marginVertical: spacing.MARGIN_6,
    height: spacing.HEIGHT_30,
    width: spacing.WIDTH_30,
  },
  // TextInput: {
  //   flex: 1,
  //   // borderWidth: 2,
  //   fontSize: textScale(14),
  // },
  AddButton: {
    height: spacing.HEIGHT_54,
    width: spacing.WIDTH_50,
    backgroundColor: '#b2ebf2',
    borderRadius: 40,
    position: 'absolute',
    right: 20,
    bottom: 50,
    shadowColor: '00b0ff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
  },
  AddImage: {
    height: spacing.HEIGHT_52,
    width: spacing.WIDTH_50,
    alignSelf: 'center',
  },
});

export default CategoryScreen;
