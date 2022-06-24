// @ts-nocheck
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import NavBar from './screens/navbar';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    
    <PaperProvider>
      <NavBar/>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

