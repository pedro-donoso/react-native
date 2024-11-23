import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./Styles";
import RenderItem from "./RenderItem";
export interface Task {
  title: string;
  done: Boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    
  }

  const markDone = () => {
    console.log('markDone');
  };

  const deleteFunction = () => {
    console.log('delete');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Ingresa nueva tarea" 
        onChangeText={(t: string) => setText(t)}
        value={text} 
        style={styles.textInput} />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whitetext}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
