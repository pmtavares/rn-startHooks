import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Button, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () =>
{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    
    const setColor = (color, change) => 
    {
        if(color ==='Red')
        {
            if(red + change > 0 && red + change < 255)
            {
                setRed(red + change);
            }
        }
        if(color ==='Blue')
        {
            if(blue + change > 0 && blue + change < 255)
            {
                setBlue(blue + change);
            }
        }
        if(color ==='Green')
        {
            if(blue + change >=0 && blue + change <= 255)
            {
                setGreen(green + change);
            }
        }
        console.log(red + " - " + blue + " - " + green);
        
    }

    return(
        <View>
            <ColorCounter color="Red" 
                    onIncrease={() => setColor('Red', 5)} 
                    onDecrease={() => setColor('Red', - 5)}/>
            <ColorCounter color="Green" 
                    onIncrease={() => setColor('Green', 5)}
                    onDecrease={() => setColor('Green', -5)}/>
            <ColorCounter color="Blue"
                onIncrease={() => setColor('Blue', + 5)}
                onDecrease={() => setColor('blue', - 5)}
            />
            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>

        
    );
}


const styles = StyleSheet.create({

});


export default SquareScreen;