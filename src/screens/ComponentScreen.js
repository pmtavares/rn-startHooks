import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () =>
{
    const name = 'Pedro'
    return(
        <View>
            <Text style={styles.textStyle}>Getting started wit components</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    subHeaderStyle: {

    }
});


export default ComponentScreen;