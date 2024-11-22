import React from "react";
import {Text,View,TextInput,TouchableOpacity,FlatList} from "react-native";
import styles from './Styles'

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Ingresa nueva tarea" style={styles.textInput} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whitetext}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList renderItem={renderItem} data={tasks} />
      </View>
    </View>
  );
}
