import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () =>
{
    const [name, setName] = useState('');
    

    return(
        <View>           
           <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false}
            value={name} onChangeText={(newValue)=> {setName(newValue)}}
           />              
           {!name.length < 4 ? <Text>Name must be 4 characteres</Text>: null}
        </View>
        
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});


export default TextScreen;