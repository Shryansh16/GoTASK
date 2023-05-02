import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import {spacing} from '../styles/spacing';
import {textScale} from '../styles/responsiveStyles';
const NoteModel = ({visible, onClose, onsubmit}) => {
  const [desc, setdesc] = useState();
  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'desc') setdesc(text);
  };
  const handleSubmit = () => {
    if (!desc.trim()) return onClose();
    onsubmit(desc);
    setdesc(' ');
    onClose();
  };
  const closeModal = () => {
    // onsubmit(desc);
    setdesc(' ');
    onClose();
  }; //   const handleModalClose = () => {
  //     Keyboard.dismiss();
  //   };
  // console.log(desc);
  return (
    <View>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.Container}>
          <TextInput
            placeholder="Your Task"
            multiline
            style={styles.Note}
            onChangeText={text => handleOnChangeText(text, 'desc')}
            value={desc}
          />
          <View style={styles.ModelButtonContainer}>
            <TouchableOpacity style={styles.AddButton} onPress={handleSubmit}>
              <Image
                source={require('../assets/tick.png')}
                style={styles.AddImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.AddButton} onPress={closeModal}>
              <Image
                source={require('../assets/cancel_button.png')}
                style={styles.crossImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalbg, StyleSheet.absoluteFillObject]}></View>
        </TouchableWithoutFeedback> */}
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  Note: {
    borderBottomWidth: 2,
    borderBottomColor: '#b2ebf2',
    fontSize: textScale(16),
    fontWeight: '600',
  },
  Container: {
    paddingTop: spacing.PADDING_20,
    paddingHorizontal: spacing.PADDING_20,
    color: 'black',
  },
  //   modalbg: {
  //     flex: 1,
  //     // zIndex: -1,
  //     // backgroundColor: 'black',
  //   },
  ModelButtonContainer: {
    flexDirection: 'row',
    marginTop: spacing.MARGIN_16,
    alignSelf: 'center',
  },
  AddButton: {
    height: spacing.HEIGHT_54,
    width: spacing.WIDTH_50,
    backgroundColor: '#b2ebf2',
    borderRadius: 40,
    marginLeft: spacing.MARGIN_14,
  },
  AddImage: {
    height: spacing.HEIGHT_36,
    width: spacing.WIDTH_34,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_6,
  },
  crossImage: {
    height: spacing.HEIGHT_28,
    width: spacing.WIDTH_28,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_12,
  },
});

export default NoteModel;
