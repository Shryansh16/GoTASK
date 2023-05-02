import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "../screens/welcomeScreen";
import Drawer from "./drawer";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
const Navigation = () => {
    const Stack = createStackNavigator();
    return (

        // <View style={styles.mainContainer}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <Stack.Screen name="home" component={WelcomeScreen} />
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        // {/* </View> */}
    )

}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})
export default Navigation