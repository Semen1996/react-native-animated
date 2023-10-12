import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import Header from "../../components/PetitionStack/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PetitionStackParamList } from "../../navigation/PetitionStack";
import ButtonBlack from "../../components/buttons/ButtonBlack";
import MoneyIcon from '../../images/Icons/payments.svg';
import PreviewIcon from '../../images/Icons/preview.svg';
import colors from "../../utils/colors";
import ProgressBar from "../../components/PetitionScreen/ProgressBar";
import { RootStackParamList } from "../../navigation/Navigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeCurrentID } from "../../store/petitionSlice";

// type Props = NativeStackScreenProps<PetitionStackParamList, 'InProgress'>;
type Props = CompositeScreenProps<
NativeStackScreenProps<PetitionStackParamList, 'InProgress'>,
  NativeStackScreenProps<RootStackParamList>
>;
function InProgressScreen({navigation, route}: Props) {
  const dispatch = useDispatch();
  const colorFill = colors.pink;
  let name = '';
  let surname = '';
  let patronomic = '';
  let citizenship = '';
  let update = '';
  let longTitleForm = ''

  const petition = route.params?.petition;

  if(petition) {
    name = petition.items.name;
    surname = petition.items.surname;
    patronomic = petition.items.patronymic;
    citizenship = petition.items.citizenship;
    update = petition.update;
    longTitleForm = petition.longTitleForm;
  }

  function handleContinue() {
    if(petition) {
      dispatch(changeCurrentID({id: petition.id}));
      
      const questions = Object.values(petition.questions);
      const nonFillQuestion = questions.find(q => q.isFill === false);
      if(nonFillQuestion) {
        if(petition.titleForm === 'Заявление о выдаче РВП') {
          navigation.navigate('RVPForm', {screen: nonFillQuestion.screen});
        } else {
          navigation.navigate('WorkingForm', {screen: nonFillQuestion.screen});
        }
      }
    }
  }

  return(
    <View style={globalStyles.container}>
      <Header
        title={'В процессе'}
        navigation={navigation}
      />
      <View style={globalStyles.main}>
        <View style={styles.content}>
          <Text style={[globalStyles.text, globalStyles.text20Mediun]}>{longTitleForm}</Text>
          <View style={[styles.price, {backgroundColor: colorFill}]}>
            <MoneyIcon width={18} height={18} />
            <Text style={[globalStyles.text, globalStyles.text14Med, styles.priceCount]}>499 Р</Text>
          </View>
          <View style={styles.data}>
            <Text style={[globalStyles.text, globalStyles.text16Reg, styles.dataText]}>
              ФИО:{' '}
              <Text style={[globalStyles.text, globalStyles.text16Med]}>
                {surname} {name} {patronomic}
              </Text>
            </Text>
            <Text style={[globalStyles.text, globalStyles.text16Reg, styles.dataText]}>
              Гражданство:{' '}
              <Text style={[globalStyles.text, globalStyles.text16Med]}>
               {citizenship}
              </Text>
            </Text>
            <Text style={[globalStyles.text, globalStyles.text16Reg, styles.dataText]}>
              Дата обновления:{' '}
              <Text style={[globalStyles.text, globalStyles.text16Med]}>{update}</Text>
            </Text>
            <Text style={[globalStyles.text, globalStyles.text16Reg, styles.dataText]}>
              Номер документа:{' '}
              <Text style={[globalStyles.text, globalStyles.text16Med]}>0000 000001</Text>
            </Text>
          </View>
          <ProgressBar procent={30} />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#EAE6FF'}}>
              <PreviewIcon width={24} height={24} />
              </View>
              <Text style={[globalStyles.text, globalStyles.text16Med, styles.buttonText]}>Предварительный просмотр</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ButtonBlack onPress={handleContinue} title={'Продолжить заполнять'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
  },
  price: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 6,
    borderRadius: 100,
    marginTop: 16,
  },
  priceCount: {
    marginLeft: 8,
  },
  data: {
    marginVertical: 24,
  },
  dataText: {
    color: '#2E2E2E',
    opacity: 0.8,
  },
  buttons: {
    marginTop: 24
  },
  button: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: '#2E2E2E',
    marginLeft: 16,
  }
})

export default InProgressScreen;