import { StatusBar } from 'expo-status-bar';
import React from 'react';
//componentes
import { 
  StyleSheet, 
  Text, View, 
  TextInput, 
  TouchableOpacity ,
  Dimensions,
  FlatList
} from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    paddingTop: 30
  },

  title: {
    fontSize: 20,
    color: '#6f6f6f',
    marginStart: 20
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f'
  },
  whitetext: {
    fontSize: 16,
    color: '#fff'
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.60,
    borderRadius: 10,
    paddingLeft: 10
  },
  inputContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addButton: {
    width: Dimensions.get('screen').width * 0.30,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5
  },
  scrollContainer: {

  }
});

const tasks = [
  {
    title: 'Alimentar al perro',
    done: false,
    date: new Date()
  },
  {
    title: 'Salir a correr',
    done: false,
    date: new Date()
  },
  {
    title: 'Nueva tarea',
    done: false,
    date: new Date()
  }
];

interface Task {
  title: string;
  done: Boolean;
  date: Date;
}

export default function App() {
  function renderItem({item}) {
    return <Text style={styles.text}>{item.title}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
          <TextInput placeholder='Ingresa nueva tarea' style={styles.textInput} />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.whitetext}>Agregar</Text>
          </TouchableOpacity>
      </View>
    <View style={styles.scrollContainer}>
      <FlatList renderItem={renderItem} data={tasks}
      />
    </View>
    </View>
  );
}


