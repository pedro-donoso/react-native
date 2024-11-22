import { StatusBar } from 'expo-status-bar';
//componentes
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: 'yellow',
    padding: 100
  },

  title: {
    fontSize: 20,
    color: '#000'
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <StatusBar style="auto" />
    </View>
  );
}


