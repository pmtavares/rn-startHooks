import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

const CounterScreen = () =>
{
    const [counter, setCounter] = useState(0);  

    return(
        <View>           
            <TouchableOpacity  style={styles.buttonStyle} >
                <Button title="Increase" onPress={() => {setCounter(counter + 1)}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>    
                <Button title="Decrease" onPress={() => {setCounter(counter - 1)}}  />
            </TouchableOpacity> 
            <Text>Current Count: {counter} </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        marginBottom: 10,
        marginTop: 5,
        width: '80%'
      }
});


export default CounterScreen;