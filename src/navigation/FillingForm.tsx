import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FIOScreen from '../screens/RVPForm/FIOScreen';
import IsQuotaScreen from '../screens/RVPForm/IsQuotaScreen';
import MotivesScreen from '../screens/RVPForm/MotivesScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import StartFillingScreen from '../screens/StartFillingScreen';
import СitizenshipScreen from '../screens/RVPForm/СitizenshipScreen';

export type FillingFormStackParamList = {
  Questions: {readonly title: string}  | undefined;
  Start: {readonly title: string}  | undefined;
  Сitizenship: {readonly title: string}  | undefined;
  IsQuota: {readonly title: string}  | undefined;
  Motives: {readonly title: string}  | undefined;
  FIO: {readonly title: string}  | undefined;
};

const FillingFormStack = createNativeStackNavigator<FillingFormStackParamList>();

function FillingForm() {
  return (
    <FillingFormStack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      
      <FillingFormStack.Screen
        name="Questions"
        initialParams={{title: 'Список вопросов'}}
        component={QuestionsScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
        }}
      />
      <FillingFormStack.Screen
        name="Start"
        initialParams={{title: 'Начальная страница'}}
        component={StartFillingScreen}
      />
      <FillingFormStack.Screen
        name="Сitizenship"
        initialParams={{title: 'Текущее гражданство'}}
        component={СitizenshipScreen}
      />
      <FillingFormStack.Screen
        name="IsQuota"
        initialParams={{title: 'Подача заявления с квотой или без'}}
        component={IsQuotaScreen}
      />
      <FillingFormStack.Screen
        name="Motives"
        initialParams={{title: 'Мотивы получения РВП'}}
        component={MotivesScreen}
      />
      <FillingFormStack.Screen
        name="FIO"
        initialParams={{title: 'ФИО'}}
        component={FIOScreen}
      />
    </FillingFormStack.Navigator>
  );
}

export default FillingForm;
