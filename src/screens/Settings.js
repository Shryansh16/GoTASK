import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Settings = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Settings Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // alignSelf: 'center',
  },
});

export default Settings;
