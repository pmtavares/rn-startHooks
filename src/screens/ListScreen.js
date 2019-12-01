import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () =>
{
    const friends = [
        {name: "Friend #1", key: "01", age: "20"},
        {name: "Friend #2", key: "02", age: "35"},
        {name: "Friend #3", key: "03", age: "18"},
        {name: "Friend #4", key: "04", age: "42"},
        {name: "Friend #5", key: "05", age: "31"},
        {name: "Friend #6", key: "06", age: "30"},
        {name: "Friend #7", key: "07", age: "55"},
    ];

    return(        
        <FlatList 
            keyExtractor={friend=> friend.name} 
            data={friends} 
            renderItem={({item}) => {
                return <View>
                        <Text style={styles.textStyle} >{item.name} -  {item.age}</Text>
                    </View> 
                
                
            }}
        />
        
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});


export default ListScreen;