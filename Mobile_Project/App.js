import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigators/stackNav';

/*const Stack = createNativeStackNavigator();
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
*/

export default function App() {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    );
}
