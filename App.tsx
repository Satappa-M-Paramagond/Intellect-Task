import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import { Colors } from './src/constants';
import { HomeController } from './src/screens';

const App = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar barStyle={'light-content'} />
                <HomeController />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkCyan
    }
});

export default App;
