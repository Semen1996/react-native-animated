import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PetitionScreen from '../screens/PetitionScreen';
import InProgressScreen from '../screens/PetitionStack/InProgressScreen';
import ReadyScreen from '../screens/PetitionStack/ReadyScreen';
import { IPetition } from '../store/petitionSlice';


export type PetitionStackParamList = {
  InProgress: {readonly title: string, petition?: IPetition}  | undefined;
  Ready: {readonly title: string, petition?: IPetition}  | undefined;
};

const PetitionScreensStack = createNativeStackNavigator<PetitionStackParamList>();

function PetitionStack() {
  return (
    <PetitionScreensStack.Navigator
      initialRouteName="InProgress"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>

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
