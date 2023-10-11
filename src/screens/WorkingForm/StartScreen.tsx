import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import MoneyIcon from '../../images/Icons/payments.svg';
import PointIcon from '../../images/Icons/point_stroke.svg';
import CountriesDropDown from "../../components/CountriesDropDown";
import BackButton from "../../components/BackButton";
import { useAppDispatch } from "../../hooks/hook";
import { addPetition } from "../../store/petitionSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WorkingFormStackParamList } from "../../navigation/WorkingForm";

type Props = NativeStackScreenProps<WorkingFormStackParamList, 'Start'>;

function StartScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const colorFill = '#FFBEB5';

  function handleFill() {
    dispatch(addPetition({titleForm: 'Заявление о выдаче РВП'}));
    // navigation.navigate('Сitizenship')
  };

  function clickQuestions() {
    dispatch(addPetition({titleForm: 'Заявление о выдаче РВП'}));
    navigation.navigate('Questions');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <CountriesDropDown />
      </View>
      <View style={styles.main}>
        <View>
        <Text style={styles.title}>Заявление о выдаче Разрешения на временное проживание (РВП)</Text>
        <View style={[styles.price, {backgroundColor: colorFill}]}>
          <MoneyIcon width={18} height={18} />
          <Text style={styles.priceCount}>499 Р</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <PointIcon width={24} height={24} fill={colorFill}/>
            <Text style={styles.listItemText}>Оплата только в случае, если вы будете скачивать заполненное заявление</Text>
          </View>
          <View style={styles.listItem}>
            <PointIcon width={24} height={24} fill={colorFill}/>
            <Text style={styles.listItemText}>Заявление может заполняться как на себя, так и на другого человека</Text>
          </View>
          <View style={styles.listItem}>
            <PointIcon width={24} height={24} fill={colorFill}/>
            <Text style={styles.listItemText}>Весь прогресс заполнения сохраняется и вы всегда можете вернуться к заявлению, чтобы продолжить</Text>
          </View>
          <View style={styles.listItem}>
            <PointIcon width={24} height={24} fill={colorFill}/>
            <Text style={styles.listItemText}>Вы сможете скачивать и исправлять оплаченное заявление сколько угодно раз (кроме номера паспорта)</Text>
          </View>
        </View>
        </View>
        <View>
        <TouchableOpacity onPress={handleFill} style={[styles.btn, styles.btnFill]}>
          <Text style={[styles.btnText, styles.btnTextFill]}>Заполнить</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickQuestions} style={styles.btn}>
          <Text style={styles.btnText}>Список вопросов</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 8,
    paddingRight: 16, 
    paddingLeft: 4,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 12,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    color: '#1C1C1C',
    marginBottom: 24,
  },
  price: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 6,
    borderRadius: 100,
  },
  priceCount: {
    marginLeft: 8,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#1C1C1C',
  },
  list: {
    marginTop: 24,
    marginBottom: 40,
  },
  listItem: {
    paddingVertical: 8,
    flexDirection: 'row',
  },
  listItemText: {
    marginLeft: 8,
    marginRight: 24,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23.84,
    letterSpacing: 0.15,
    color: '#1C1C1C',
  },
  btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#7B7B7B',
  },
  btnFill: {
    borderRadius: 100,
    backgroundColor: '#1C1C1C',
    marginBottom: 8,
  },
  btnTextFill: {
    color: '#FFFFFF',
  }
});

export default StartScreen;