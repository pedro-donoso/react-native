import { StatusBar } from 'expo-status-bar';
//componentes
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#000'
  },
});

export default function App() {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}


