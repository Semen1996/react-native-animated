import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionsScreen from '../screens/QuestionsScreen';
import StartFillingScreen from '../screens/StartFillingScreen';

export type WorkingFormStackParamList = {
  Questions: {readonly title: string}  | undefined;
  Start: {readonly title: string}  | undefined;
};

const WorkingFormStack = createNativeStackNavigator<WorkingFormStackParamList>();

function WorkingForm() {
  return (
    <WorkingFormStack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      
      <WorkingFormStack.Screen
        name="Questions"
        initialParams={{title: 'Список вопросов'}}
        component={QuestionsScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
        }}
      />
      <WorkingFormStack.Screen
        name="Start"
        initialParams={{title: 'Начальная страница'}}
        component={StartFillingScreen}
      />
    </WorkingFormStack.Navigator>
  );
}

export default WorkingForm;
