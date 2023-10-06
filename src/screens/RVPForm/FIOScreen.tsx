import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import ButtonDone from '../../components/ButtonDone';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addPetitionItem } from '../../store/petitionSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FillingFormStackParamList } from '../../navigation/FillingForm';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../../navigation/BottomTabs';

type Props = CompositeScreenProps<
  NativeStackScreenProps<FillingFormStackParamList, 'FIO'>,
  BottomTabScreenProps<TabStackParamList>
>;

function FIOScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const petitionId = useAppSelector(state => state.petitions.currentPetition);

  const [isFilled, setIsFilled] = useState(false);


  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');


  function handleFill() {
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'name',
        value: name,
      }),
    );
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'surname',
        value: surname,
      }),
    );
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'patronymic',
        value: patronymic,
      }),
    );
    navigation.navigate('Home');
  }

  function handleName(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    if(text.length >= 2) {
      setIsFilled(true);
    } else{
      setIsFilled(false);
    }
    setName(text);
  }



  return (
    <View style={globalStyles.container}>
      <HeaderFilling title={'ФИО заявителя'} currentNumber={4} navigation={navigation}/>
      <View style={globalStyles.main}>
        <View style={{marginTop: 87}}>
        <FloatingLabelInput
          label='Имя'
          value={name}
          onChange={handleName}
          stylesContainer={{marginBottom: 32}}
        />
                <FloatingLabelInput
          label='Фамилия'
          value={surname}
          onChange={(evt: NativeSyntheticEvent<TextInputChangeEventData>) => setSurname(evt.nativeEvent.text)}
          stylesContainer={{marginBottom: 32}}
        />
                <FloatingLabelInput
          label='Отчество'
          value={patronymic}
          onChange={(evt: NativeSyntheticEvent<TextInputChangeEventData>) => setPatronymic(evt.nativeEvent.text)}
        />
          <Text style={[globalStyles.text, globalStyles.text12Reg, styles.span]}>При наличии</Text>
        </View>
        {
          isFilled ?
            <ButtonDone onPress={handleFill}/>
            :
            <ButtonSkip onPress={() => navigation.navigate('Home')} />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DAD8D5',
    color: '#2E2E2E',
  },
  span: {
    paddingLeft: 16,
    paddingTop: 4,
    color: '#7B7B7B'
  }
});

export default FIOScreen;
