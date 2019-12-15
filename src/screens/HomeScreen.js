import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Main HomeScreen</Text>     
      <TouchableOpacity style={styles.buttonStyle}>
        <Button title="Components Demo" onPress={() => {navigation.navigate('Components')}}  />    
      </TouchableOpacity>   
      
      <TouchableOpacity style={styles.buttonStyle} >
        <Button title="List Demo" onPress={() => {navigation.navigate('List')}} />
      </TouchableOpacity>
      

        <TouchableOpacity style={styles.buttonStyle}>
          <Button title="Image Demo" onPress ={() => {navigation.navigate('Image')}}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} >
          <Button title="Go to counter" onPress={() => {navigation.navigate('Counter')}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} >
          <Button title="Go to Color" onPress={() => {navigation.navigate('Color')}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} >
          <Button title="Go to Square" onPress={() => {navigation.navigate('Square')}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} >
        <Button title="Go to Square Reducer" onPress={() => {navigation.navigate('SquareRed')}} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle:{
    marginBottom: 10,
    marginTop: 5,
    width: '80%'
  }
});

export default HomeScreen;
