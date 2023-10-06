import {View, StatusBar, Text} from 'react-native';
import HomeIcon from './src/images/Icons/home_stroke.svg';
import FolderIcon from './src/images/Icons/folder_stroke.svg';
import ChatIcon from './src/images/Icons/chat_stroke.svg';
import AccountIcon from './src/images/Icons/person_stroke.svg';
import HomeFillIcon from './src/images/Icons/home_fill.svg';
import FolderFillIcon from './src/images/Icons/folder_fill.svg';
import ChatFillIcon from './src/images/Icons/chat_fill.svg';
import AccountFillIcon from './src/images/Icons/person_fill.svg';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InitialScreen from './src/screens/InitialScreen';
import HomeScreen from './src/screens/HomeScreen';
import PetitionScreen from './src/screens/PetitionScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartFillingScreen from './src/screens/StartFillingScreen';
import СitizenshipScreen from './src/screens/СitizenshipScreen';
import IsQuotaScreen from './src/screens/IsQuotaScreen';
import MotivesScreen from './src/screens/MotivesScreen';
import FIOScreen from './src/screens/FIOScreen';
import DateOfBirthScreen from './src/screens/DateOfBirthScreen';
import QuestionsScreen from './src/screens/QuestionsScreen';
import { Provider } from 'react-redux';
import store from './store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const FillingFormStack = createNativeStackNavigator();

function FillingFormStackGroup() {
  return (
    <FillingFormStack.Navigator initialRouteName="Начальная страница" screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      }}>
      <FillingFormStack.Screen
        name="Список вопросов"
        component={QuestionsScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom', animationTypeForReplace: 'pop'}}
      />
      <FillingFormStack.Screen
        name="Начальная страница"
        component={StartFillingScreen}
      />
      <FillingFormStack.Screen
        name="Текущее гражданство"
        component={СitizenshipScreen}
      />
      <FillingFormStack.Screen name="Подача заявления с квотой или без" component={IsQuotaScreen} />
      <FillingFormStack.Screen name="Мотивы получения РВП" component={MotivesScreen} />
      <FillingFormStack.Screen name="ФИО" component={FIOScreen} />
      <FillingFormStack.Screen
        name="Дата рождения"
        component={DateOfBirthScreen}
      />
    </FillingFormStack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Главная"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                marginTop: 12,
              }}>
              <View
                style={{
                  width: 64,
                  height: 32,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 4,
                  borderRadius: 16,
                  backgroundColor: focused ? '#D4CDFF' : 'inherit',
                }}>
                {route.name === 'Главная' ? (
                  focused ? (
                    <HomeFillIcon width="24px" height="24px" />
                  ) : (
                    <HomeIcon width="24px" height="24px" />
                  )
                ) : route.name === 'Заявления' ? (
                  focused ? (
                    <FolderFillIcon width="24px" height="24px" />
                  ) : (
                    <FolderIcon width="24px" height="24px" />
                  )
                ) : route.name === 'Чат' ? (
                  focused ? (
                    <ChatFillIcon width="24px" height="24px" />
                  ) : (
                    <ChatIcon width="24px" height="24px" />
                  )
                ) : focused ? (
                  <AccountFillIcon width="24px" height="24px" />
                ) : (
                  <AccountIcon width="24px" height="24px" />
                )}
              </View>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: '500',
                  lineHeight: 15.96,
                  letterSpacing: 0.2,
                  textAlign: 'center',
                  color: focused ? '#1C1C1C' : '#2E2E2E',
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: '#F2F0FF',
        },
        tabBarBadgeStyle: {
          marginTop: 5,
          backgroundColor: '#EB473D',
          fontFamily: 'Roboto',
          fontSize: 11,
          fontWeight: '500',
          lineHeight: 15.51,
        },
      })}>
      <Tab.Screen name="Главная" component={HomeScreen} options={{title: ''}} />
      <Tab.Screen
        name="Заявления"
        component={PetitionScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="Чат"
        component={HomeScreen}
        options={{title: '', tabBarBadge: 3}}
      />
      <Tab.Screen
        name="Аккаунт"
        component={PetitionScreen}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Initial" component={InitialScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="FillingForm" component={FillingFormStackGroup} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
  );
}

export default App;
