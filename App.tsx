import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
  
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
