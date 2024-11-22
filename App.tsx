import React from "react";
//componentes
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

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

interface Task {
  title: string;
  done: Boolean;
  date: Date;
}

export default function App() {
  function renderItem({ item }: { item: Task }) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {
          //condicional
          item.done && <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.whitetext}>Eliminar</Text>
        </TouchableOpacity>
        }
      </View>
    );
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
