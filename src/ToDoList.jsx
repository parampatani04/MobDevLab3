import React from 'react';
import {View, Text} from 'react-native';

function ToDoList({ tasks }) {
    return(
        <View>
            {tasks.map((item, index) => (
                <View key={item}>
                    <Text>{item}</Text>
                </View>
            ))}
        </ View>
    );
}

export default ToDoList;