import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import Header from "../../components/PetitionStack/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PetitionStackParamList } from "../../navigation/PetitionStack";
import ButtonBlack from "../../components/buttons/ButtonBlack";
import MoneyIcon from '../../images/Icons/payments.svg';
import PreviewIcon from '../../images/Icons/preview.svg';
import EditIcon from '../../images/Icons/edit.svg';
import colors from "../../utils/colors";
import ProgressBar from "../../components/PetitionScreen/ProgressBar";
import { RootStackParamList } from "../../navigation/Navigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeCurrentID } from "../../store/petitionSlice";
import { costFormRVP, longTitleFormRVP } from "../../utils/RVPForm";
import { costFormWorking, longTitleFormWorking } from "../../utils/WorkingForm";

// type Props = NativeStackScreenProps<PetitionStackParamList, 'InProgress'>;
type Props = CompositeScreenProps<
NativeStackScreenProps<PetitionStackParamList, 'Ready'>,
  NativeStackScreenProps<RootStackParamList>
>;
function ReadyScreen({navigation, route}: Props) {
  const dispatch = useDispatch();
  let colorFill = 'black';
  let cost = 0;
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

    if(petition.form === 'RVPForm') {
      longTitleForm = longTitleFormRVP;
      colorFill = colors.pink;
      cost = costFormRVP;
    } else if(petition.form === 'WorkingForm') {
      longTitleForm = longTitleFormWorking;
      cost = costFormWorking;
      colorFill = colors.purple;
    }
  }

  function handleContinue() {
    if(petition) {
      dispatch(changeCurrentID({id: petition.id}));
      
      const questions = Object.values(petition.questions);
      const nonFillQuestion = questions.find(q => q.isFill === false);
      if(nonFillQuestion) {
        if(petition.form === 'RVPForm') {
          navigation.navigate('RVPForm', {screen: nonFillQuestion.screen});
        } else if(petition.form === 'WorkingForm') {
          navigation.navigate('WorkingForm', {screen: nonFillQuestion.screen});
        }
      }
    }
  }

  return(
    <View style={globalStyles.container}>
      <Header
        title={'Готовые'}
        navigation={navigation}
      />
      <View style={globalStyles.main}>
        <View style={styles.content}>
          <Text style={[globalStyles.text, globalStyles.text20Mediun]}>{longTitleForm}</Text>
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
                <EditIcon width={24} height={24} />
              </View>
              <Text style={[globalStyles.text, globalStyles.text16Med, styles.buttonText]}>Изменить заявление</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#EAE6FF'}}>
                <PreviewIcon width={24} height={24} />
              </View>
              <Text style={[globalStyles.text, globalStyles.text16Med, styles.buttonText]}>Предварительный просмотр</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleContinue} style={styles.buttonBlack}>
          <MoneyIcon width={18} height={18} fill='#FFF'/>
          <Text style={[globalStyles.text, globalStyles.text14Med, styles.buttonBlackText]}>{`${cost} Р`}</Text>
        </TouchableOpacity>
        {/* <ButtonBlack onPress={handleContinue} title={`${cost} Р`}/> */}
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
  },
  buttonBlack: {
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  buttonBlackText: {
    marginLeft: 8,
    color: '#FFFFFF'
  }
})

export default ReadyScreen;