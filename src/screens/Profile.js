import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Profile Screen</Text>
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

export default Profile;
