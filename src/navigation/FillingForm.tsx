import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FIOScreen from '../screens/RVPForm/FIOScreen';
import IsQuotaScreen from '../screens/RVPForm/IsQuotaScreen';
import MotivesScreen from '../screens/RVPForm/MotivesScreen';
import QuestionsScreen from '../screens/QuestionsScreen';
import StartFillingScreen from '../screens/StartFillingScreen';
import СitizenshipScreen from '../screens/RVPForm/СitizenshipScreen';

const FillingFormStack = createNativeStackNavigator();

function FillingForm() {
  return (
    <FillingFormStack.Navigator
      initialRouteName="Начальная страница"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <FillingFormStack.Screen
        name="Список вопросов"
        component={QuestionsScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationTypeForReplace: 'pop',
        }}
      />
      <FillingFormStack.Screen
        name="Начальная страница"
        component={StartFillingScreen}
      />
      <FillingFormStack.Screen
        name="Текущее гражданство"
        component={СitizenshipScreen}
      />
      <FillingFormStack.Screen
        name="Подача заявления с квотой или без"
        component={IsQuotaScreen}
      />
      <FillingFormStack.Screen
        name="Мотивы получения РВП"
        component={MotivesScreen}
      />
      <FillingFormStack.Screen name="ФИО" component={FIOScreen} />
    </FillingFormStack.Navigator>
  );
}

export default FillingForm;
