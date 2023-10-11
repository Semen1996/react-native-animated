import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import BottomTabs from './BottomTabs';
import WorkingForm from './WorkingForm';
import RVPForm from './RVPForm';

export type RootStackParamList = {
  Initial: undefined;
  BottomTabs: undefined;
  RVPForm: undefined;
  WorkingForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="RVPForm" component={RVPForm} />
        <Stack.Screen name="WorkingForm" component={WorkingForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
