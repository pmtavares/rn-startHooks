import React, {useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 5;
const reducer  = (state, action) =>
{
    switch(action.colorToChange)
    {
        case 'red':
            return {
                ...state, red: state.red + action.amout
            };
        case 'green':
            return {
                ...state, green: state.green + action.amout
            };
        case 'blue':
            return {
                ...state, blue: state.blue + action.amout
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
                    onIncrease={() => runReducer({colorToChange: 'red', amout: COLOR_INCREMENT})} 
                    onDecrease={() => runReducer({colorToChange: 'red', amout: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Green" 
                    onIncrease={() => runReducer({colorToChange: 'green', amout: COLOR_INCREMENT})}
                    onDecrease={() => runReducer({colorToChange: 'green', amout: -1 * COLOR_INCREMENT})}/>
            <ColorCounter color="Blue"
                onIncrease={() => runReducer({colorToChange: 'blue', amout: COLOR_INCREMENT})}
                onDecrease={() => runReducer({colorToChange: 'blue', amout: -1 * COLOR_INCREMENT})}
            />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>

        
    );
}


const styles = StyleSheet.create({

});


export default SquareScreenReducer;