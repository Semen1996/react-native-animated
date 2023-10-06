import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from '../images/Icons/home_stroke.svg';
import HomeFillIcon from '../images/Icons/home_fill.svg';
import FolderIcon from '../images/Icons/folder_stroke.svg';
import FolderFillIcon from '../images/Icons/folder_fill.svg';
import ChatIcon from '../images/Icons/chat_stroke.svg';
import ChatFillIcon from '../images/Icons/chat_fill.svg';
import AccountIcon from '../images/Icons/person_stroke.svg';
import AccountFillIcon from '../images/Icons/person_fill.svg';
import HomeScreen from "../screens/HomeScreen";
import PetitionScreen from "../screens/PetitionScreen";
import globalStyles from "../styles/globalStyles";

const Tab = createBottomTabNavigator();

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
                    <HomeFillIcon style={styles.icon} />
                  ) : (
                    <HomeIcon style={styles.icon} />
                  )
                ) : route.name === 'Заявления' ? (
                  focused ? (
                    <FolderFillIcon style={styles.icon} />
                  ) : (
                    <FolderIcon style={styles.icon} />
                  )
                ) : route.name === 'Чат' ? (
                  focused ? (
                    <ChatFillIcon style={styles.icon} />
                  ) : (
                    <ChatIcon style={styles.icon} />
                  )
                ) : focused ? (
                  <AccountFillIcon style={styles.icon} />
                ) : (
                  <AccountIcon style={styles.icon} />
                )}
              </View>
              <Text
                style={[globalStyles.text, globalStyles.text12Med, {
                  textAlign: 'center',
                  color: focused ? '#1C1C1C' : '#2E2E2E',
                }]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: '#F2F0FF',
        },
        tabBarBadgeStyle: [globalStyles.text, {
          marginTop: 5,
          backgroundColor: '#EB473D',
          color: '#FFFFFF',
          fontSize: 11,
          fontWeight: '500',
          lineHeight: 15.51,
        }],
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

export default BottomTabs;