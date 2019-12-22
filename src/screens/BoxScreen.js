import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>        
            <View style={styles.viewThreeStyle}></View>

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100
    },
    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red'

    },
    viewTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'blue'

    }
});
export default BoxScreen;