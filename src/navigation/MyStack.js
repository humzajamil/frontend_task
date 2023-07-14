import {createStackNavigator} from '@react-navigation/stack';
import OverviewScreen from '../component/OverviewScreen';
import DetailViewScreen from '../component/DetailViewScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={OverviewScreen} />
      <Stack.Screen name="DetailView" component={DetailViewScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
