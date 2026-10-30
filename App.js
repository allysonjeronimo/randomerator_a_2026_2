import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Randomerator } from './components/randomerator';
import { PasswordGenerator } from './components/password-generator';

export default function App() {
  return (
    // JSX: Permite escrever codigo baseado em tags dentro do JavaSCript
    <PasswordGenerator/>
  );
}