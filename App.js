import { StatusBar } from 'expo-status-bar';
//componentes
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: 'yellow'
  },

  title: {
    fontSize: 20,
    color: '#000'
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}


