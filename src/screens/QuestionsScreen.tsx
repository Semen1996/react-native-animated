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
import { RVPFormStackParamList } from '../navigation/RVPForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks/hook';


type Props = NativeStackScreenProps<RVPFormStackParamList, 'Questions'>;

function QuestionsScreen({navigation}: Props) {
  const petition = useAppSelector(state => {
    const id = state.petitions.currentID;
    return state.petitions.list.find(p => p.id === id);
  });

  let questions: any[] = [];

  if(petition) {
    questions = Object.values(petition.questions);
  }

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
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.item}>
              <View style={{flexDirection: 'row'}}>
                <Text  style={[globalStyles.text, globalStyles.text14Med, styles.itemIndex]}>{index+1}</Text>
                <Text style={[globalStyles.text, globalStyles.text14Med]}>{item.title}</Text>
              </View>
              {
                item.isFill ?
                <DoneIcon width={32} height={32}/>
                :
                <NotDoneIcon width={32} height={32}/>
              }
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
