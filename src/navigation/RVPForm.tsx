import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FIOScreen from '../screens/RVPForm/FIOScreen';
import IsQuotaScreen from '../screens/RVPForm/IsQuotaScreen';
import MotivesScreen from '../screens/RVPForm/MotivesScreen';
import QuestionsScreen from '../screens/RVPForm/QuestionsScreen';
import StartScreen from '../screens/RVPForm/StartScreen';
import СitizenshipScreen from '../screens/RVPForm/СitizenshipScreen';

export type RVPFormStackParamList = {
  Questions: {readonly title: string}  | undefined;
  Start: {readonly title: string}  | undefined;
  Сitizenship: {readonly title: string}  | undefined;
  IsQuota: {readonly title: string}  | undefined;
  Motives: {readonly title: string}  | undefined;
  FIO: {readonly title: string}  | undefined;
};

const RVPFormStack = createNativeStackNavigator<RVPFormStackParamList>();

function RVPForm() {
  return (
    <RVPFormStack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      
      <RVPFormStack.Screen
        name="Questions"
        initialParams={{title: 'Список вопросов'}}
        component={QuestionsScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
        }}
      />
      <RVPFormStack.Screen
        name="Start"
        initialParams={{title: 'Начальная страница'}}
        component={StartScreen}
      />
      <RVPFormStack.Screen
        name="Сitizenship"
        initialParams={{title: 'Текущее гражданство'}}
        component={СitizenshipScreen}
      />
      <RVPFormStack.Screen
        name="IsQuota"
        initialParams={{title: 'Подача заявления с квотой или без'}}
        component={IsQuotaScreen}
      />
      <RVPFormStack.Screen
        name="Motives"
        initialParams={{title: 'Мотивы получения РВП'}}
        component={MotivesScreen}
      />
      <RVPFormStack.Screen
        name="FIO"
        initialParams={{title: 'ФИО'}}
        component={FIOScreen}
      />
    </RVPFormStack.Navigator>
  );
}

export default RVPForm;
