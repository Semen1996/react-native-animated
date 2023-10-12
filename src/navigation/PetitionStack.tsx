import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PetitionScreen from '../screens/PetitionScreen';
import InProgressScreen from '../screens/PetitionStack/InProgressScreen';
import ReadyScreen from '../screens/PetitionStack/ReadyScreen';


export type PetitionStackParamList = {
  Petitions: {readonly title: string}  | undefined;
  InProgress: {readonly title: string}  | undefined;
  Ready: {readonly title: string}  | undefined;
};

const PetitionScreensStack = createNativeStackNavigator<PetitionStackParamList>();

function PetitionStack() {
  return (
    <PetitionScreensStack.Navigator
      initialRouteName="Petitions"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <PetitionScreensStack.Screen
        name="Petitions"
        initialParams={{title: 'Заявления'}}
        component={PetitionScreen}
      />
      <PetitionScreensStack.Screen
        name="InProgress"
        initialParams={{title: 'В процессе'}}
        component={InProgressScreen}
      />
      <PetitionScreensStack.Screen
        name="Ready"
        initialParams={{title: 'Готовые'}}
        component={ReadyScreen}
      />
    </PetitionScreensStack.Navigator>
  );
}

export default PetitionStack;
