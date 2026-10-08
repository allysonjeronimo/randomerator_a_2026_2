import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Randomerator } from './components/randomerator';

export default function App() {
  return (
    // JSX: Permite escrever codigo baseado em tags dentro do JavaSCript
    <View style={styles.container}>
      <Randomerator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
