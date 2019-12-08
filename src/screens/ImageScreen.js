import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>
{
    return(
        <View>            
            <ImageDetail title="Forest" score="Score: 9.0"  imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Beach" score="Score: 8.0"  imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Mountain" score="Score: 7.0"  imageSource={require('../../assets/mountain.jpg')}/>
        </View>
        
      
    );
}

const styles = StyleSheet.create({

});
    

export default ImageScreen;