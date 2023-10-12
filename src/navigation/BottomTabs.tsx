import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../images/Icons/home_stroke.svg';
import HomeFillIcon from '../images/Icons/home_fill.svg';
import FolderIcon from '../images/Icons/folder_stroke.svg';
import FolderFillIcon from '../images/Icons/folder_fill.svg';
import ChatIcon from '../images/Icons/chat_stroke.svg';
import ChatFillIcon from '../images/Icons/chat_fill.svg';
import AccountIcon from '../images/Icons/person_stroke.svg';
import AccountFillIcon from '../images/Icons/person_fill.svg';
import HomeScreen from '../screens/HomeScreen';
import globalStyles from '../styles/globalStyles';
import PetitionScreen from '../screens/PetitionScreen';

type ITabIcon = {
  name: string;
  focused: boolean;
  title: string;
};

export type TabStackParamList = {
  Home: {readonly title: string} | undefined;
  Petitions: {readonly title: string} | undefined;
  Chat: {readonly title: string} | undefined;
  Account: {readonly title: string} | undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

function TabIcon({name, focused, title}: ITabIcon) {
  return (
    <View>
      <View
        style={[
          styles.tabBarIconActive,
          {backgroundColor: focused ? '#D4CDFF' : 'inherit'},
        ]}>
        {name === 'Home' ? (
          focused ? (
            <HomeFillIcon style={styles.icon} />
          ) : (
            <HomeIcon style={styles.icon} />
          )
        ) : name === 'Petitions' ? (
          focused ? (
            <FolderFillIcon style={styles.icon} />
          ) : (
            <FolderIcon style={styles.icon} />
          )
        ) : name === 'Chat' ? (
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
        style={[
          globalStyles.text,
          globalStyles.text12Med,
          {
            textAlign: 'center',
            color: focused ? '#1C1C1C' : '#2E2E2E',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return <TabIcon name={route.name} focused={focused} title={route.params ? route.params.title : 'Пункт'} />;
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: '#F2F0FF',
        },
        tabBarBadgeStyle: [
          globalStyles.text,
          {
            marginTop: 5,
            backgroundColor: '#EB473D',
            color: '#FFFFFF',
            fontSize: 11,
            fontWeight: '500',
            lineHeight: 15.51,
          },
        ],
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{title: 'Главная'}}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Petitions"
        component={PetitionScreen}
        initialParams={{title: 'Заявления'}}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Chat"
        component={PetitionScreen}
        initialParams={{title: 'Чат'}}
        options={{tabBarShowLabel: false, tabBarBadge: 3}}
      />
      <Tab.Screen
        name="Account"
        component={PetitionScreen}
        initialParams={{title: 'Аккаунт'}}
        options={{tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  tabBarIconActive: {
    width: 64,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    borderRadius: 16,
  },
});

export default BottomTabs;
