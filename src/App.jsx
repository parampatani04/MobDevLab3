import React, { useState } from 'react';
import {} from 'react-native';
import ToDoList from './ToDoList';

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
        ]);

    return(
        <ToDoList tasks = {tasks} />
    )
}

export default App;