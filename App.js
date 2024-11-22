import { StatusBar } from 'expo-status-bar';
//componentes
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    paddingTop: 30
  },

  title: {
    fontSize: 20,
    color: '#6f6f6f'
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f'
  },
  whitetext: {
    fontSize: 16,
    color: '#fff'
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <StatusBar style="auto" />
    </View>
  );
}


