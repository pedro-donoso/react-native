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

//tareas
const tasks = [
  {
    title: "Alimentar al perro",
    done: true,
    date: new Date(),
  },
  {
    title: "Salir a correr",
    done: false,
    date: new Date(),
  },
  {
    title: "Nueva tarea",
    done: true,
    date: new Date(),
  },
];

export interface Task {
  title: string;
  done: Boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('Hola mundo');
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
        <TextInput placeholder="Ingresa nueva tarea" value={text} style={styles.textInput} />
        <TouchableOpacity style={styles.addButton}>
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
