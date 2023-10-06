import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import BottomTabs from './BottomTabs';
import FillingForm from './FillingForm';

export type RootStackParamList = {
  Initial: undefined;
  BottomTabs: undefined;
  FillingForm: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="FillingForm" component={FillingForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
