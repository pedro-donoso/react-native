import { StatusBar } from 'expo-status-bar';
//componentes
import { 
  StyleSheet, 
  Text, View, 
  TextInput, 
  TouchableOpacity 
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
    borderWidth: 1
  },
  inputContainer: {
    margin: 20
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity>
            <Text>Agregar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}


