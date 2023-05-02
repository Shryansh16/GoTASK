import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerComponent from '../modules/DrawerComponent';
import FunctionScreen from '../screens/FunctionScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import {spacing} from '../styles/spacing';
const Drawer = ({navigation}) => {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.mainContainer}>
      <Drawer.Navigator
        initialRouteName="FunctionScreen"
        drawerContent={props => <DrawerComponent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#0091ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: 5,
            fontSize: 15,
          },
        }}>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="FunctionScreen" component={FunctionScreen} />
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // borderWidth: 4,
  },
});
export default Drawer;
