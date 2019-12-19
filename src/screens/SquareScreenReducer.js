import React, {useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 5;
const reducer  = (state, action) =>
{
    switch(action.type)
    {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? 
                state : { ...state, red: state.red + action.payload };         
             
        case 'green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0)
            {
                return state;
            }
            return {
                ...state, green: state.green + action.payload
            };
        case 'blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0)
            {
                return state;
            }
            return {
                ...state, blue: state.blue + action.payload
            };
        default: 
            return state;
    }
}

const SquareScreenReducer = () =>
{
      
    const [state, runReducer] = useReducer(reducer, {'red': 0, 'green': 0, 'blue': 0});
    const {red, green, blue} = state;

    return(
        <View>
            <ColorCounter color="Red" 
                    onIncrease={() => runReducer({type: 'red', payload: COLOR_INCREMENT})} 
                    onDecrease={() => runReducer({type: 'red', payload: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Green" 
                    onIncrease={() => runReducer({type: 'green', payload: COLOR_INCREMENT})}
                    onDecrease={() => runReducer({type: 'green', payload: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Blue"
                onIncrease={() => runReducer({type: 'blue', payload: COLOR_INCREMENT})}
                onDecrease={() => runReducer({type: 'blue', payload: -1 * COLOR_INCREMENT})}
            />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>

        
    );
}


const styles = StyleSheet.create({

});


export default SquareScreenReducer;