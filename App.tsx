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

//estilos
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 30,
  },

  title: {
    fontSize: 20,
    color: "#6f6f6f",
    marginStart: 20,
  },
  text: {
    fontSize: 16,
    color: "#6f6f6f",
  },
  textDone: {
    fontSize: 16,
    color: "#6f6f6f",
    textDecorationLine: "line-through",
  },
  whitetext: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    borderColor: "#6f6f6f",
    borderWidth: 1,
    width: Dimensions.get("screen").width * 0.6,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    width: Dimensions.get("screen").width * 0.3,
    backgroundColor: "#5897fb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
  scrollContainer: {
    margin: 20
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: "#e4e4e4",
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  removeButton: {
    backgroundColor: '#f33d3d',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10
  }
});

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
