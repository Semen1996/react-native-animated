import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import CloseButton from '../components/CloseButton';
import ProgressBar from '../components/ProgressBar';
import DoneIcon from '../images/Icons/Done.svg';
import NotDoneIcon from '../images/Icons/Not_done.svg';
import { FillingFormStackParamList } from '../navigation/FillingForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<FillingFormStackParamList, 'Questions'>;

function QuestionsScreen({navigation, route}: Props) {
  const questions = navigation.getState().routeNames.slice(2);
  console.log(navigation.getParent()?.getState())
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={[globalStyles.text, globalStyles.text18Mediun]}>Список вопросов</Text>
        <CloseButton onPress={() => navigation.goBack()}/>
      </View>
      <View style={globalStyles.main}>
      <ProgressBar procent={0} />
      <FlatList
        data={questions}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(item)} style={styles.item}>
              <View style={{flexDirection: 'row'}}>
                <Text  style={[globalStyles.text, globalStyles.text14Med, styles.itemIndex]}>{index+1}</Text>
                <Text style={[globalStyles.text, globalStyles.text14Med]}>{item}</Text>
              </View>
              <NotDoneIcon width={32} height={32}/>
            </TouchableOpacity>
          )
        }}
        style={{marginTop: 20}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 16, 
    paddingRight: 4,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EAE6FF'
  },
  itemIndex: {
    minWidth: 18,
    marginRight: 12,
    textAlign: 'right',
    color: '#7B7B7B'
  },
});

export default QuestionsScreen;
