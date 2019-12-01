import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen test</Text>
      <Button title="Components Demo" 
        onPress={() => {navigation.navigate('Components')}} style={styles.buttonStyle} />
      <Button title="List Demo" onPress={() => {navigation.navigate('List')}} />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle:{
    marginBottom: 10
  }
});

export default HomeScreen;
