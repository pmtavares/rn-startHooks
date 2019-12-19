import React, {useReducer} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';


const COUNT_INCREMENT= 1;

const reducer = (state, action) => {
    switch(action.type)
    {
        case 'Increase':
            return {
                ...state, counter: state.counter + action.payload
            };
        case 'Decrease':
            return {
                ...state, counter: state.counter - action.payload
            };
        default:
            return state;

    }
}

const CounterScreen = () =>
{
    //const [counter, setCounter] = useState(0);  

    const [state, dispatch] =  useReducer(reducer, {counter: 0})


    return(
        <View>           
            <TouchableOpacity  style={styles.buttonStyle} >
                <Button title="Increase" onPress={() => {dispatch({type: 'Increase', payload: COUNT_INCREMENT})}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>    
                <Button title="Decrease" onPress={() => {dispatch({type: 'Decrease', payload: COUNT_INCREMENT})}}  />
            </TouchableOpacity> 
            <Text>Current Count: {state.counter} </Text>
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