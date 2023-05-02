import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/navigation";
import WelcomeScreen from "./screens/welcomeScreen";
const App = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={'#fff'}
                barStyle={'dark-content'}
            />
            {/* <WelcomeScreen /> */}
            <Navigation />
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    }
})


export default App