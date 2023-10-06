import {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import CountriesDropDown from '../components/CountriesDropDown';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Initial'>;

function InitialScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
          <CountriesDropDown/>
        </View>
        <View style={styles.cover}>
          <Image
            source={require('../images/initialCover.png')}
            style={styles.coverImage}
          />
        </View>
        <View>
          <Text style={[globalStyles.text, styles.mainTitle]}>Добро пожаловать!</Text>
          <Text style={[globalStyles.text, styles.mainTxt]}>immiForm – приложение для заполнения иммиграционных заявлений Российской Федерации прямо в вашем смартфоне</Text>
        </View>
        <View>
          <Text style={[globalStyles.text,styles.listItem, styles.listItemPurple]}>Трудовой патент</Text>
          <Text style={[globalStyles.text,styles.listItem, styles.listItemPink]}>Разрешение на временное проживание</Text>
          <Text style={[globalStyles.text,styles.listItem, styles.listItemYellow]}>Вид на жительство</Text>
          <Text style={[globalStyles.text,styles.listItem, styles.listItemGreen]}>Гражданство Российском Федерации</Text>
        </View>
      </View>
      <TouchableOpacity
      style={styles.startBtn}
      onPress={() => navigation.navigate('BottomTabs')}
      >
        <Text style={[globalStyles.text, styles.startBtnTxt]}>Начать</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
    width: 124,
    resizeMode: 'contain',
  },

  langSelect: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    paddingVertical: 11,
    paddingHorizontal: 12,
  },

  dropdownBtnImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  dropdownBtnTxt: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#7B7B7B',
    paddingLeft: 8,
  },

  dropdownBtn: {
    zIndex: 2,
    width: 134,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  dropdownBtnChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  dropdownDropdown: {
    backgroundColor: '#F4F4F4',
    borderRadius: 24,
    paddingVertical: 8,
    marginTop: 8,
    maxHeight: 300,
  },

  dropdownRow: {
    height: 40,
    borderBottomWidth: 0,
  },

  dropdownSelected: {
    backgroundColor: '#EAE6FF',
  },

  dropdownRowChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 12,
  },
  dropdownRowImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  dropdownRowTxt: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#2E2E2E',
  },
  cover: {
    height: 288,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: 284,
    resizeMode: 'contain',
  },
  startBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 100,
    backgroundColor: '#1C1C1C',
  },
  startBtnTxt: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  mainTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  mainTxt: {
    marginVertical: 16,
    fontSize: 15,
    lineHeight: 21.3,
    fontWeight: '400',
  },
  listItem: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginBottom: 8,
    backgroundColor: '#D4CDFF',
    color: "#2E2E2E",
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '500',
    opacity: 0.8,
  },
  listItemPurple: {
    backgroundColor: '#D4CDFF'
  },
  listItemPink: {
    backgroundColor: '#FFDFDA'
  },
  listItemYellow: {
    backgroundColor: '#FFF7C0'
  },
  listItemGreen: {
    backgroundColor: '#C7FFE4'
  },
});

export default InitialScreen;
