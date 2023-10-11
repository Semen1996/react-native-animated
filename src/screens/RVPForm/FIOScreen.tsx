import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import ButtonDone from '../../components/ButtonDone';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {changeItem, changePetition} from '../../store/petitionSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FillingFormStackParamList} from '../../navigation/FillingForm';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from '../../navigation/BottomTabs';

type Props = CompositeScreenProps<
  NativeStackScreenProps<FillingFormStackParamList, 'FIO'>,
  BottomTabScreenProps<TabStackParamList>
>;

function FIOScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const petition = useAppSelector(state => {
    const id = state.petitions.currentID;
    return state.petitions.list.find(p => p.id === id);
  });

  let id = '';
  let isFillStore = false;
  let nameStore = '';
  let surnameStore = '';
  let patronymicStore = '';

  if(petition) {
    id = petition.id;
    isFillStore = petition.questions.FIO.isFill;
    nameStore = petition.items.name;
    surnameStore = petition.items.surname;
    patronymicStore = petition.items.patronymic;
  }

  const [isValid, setIsValid] = useState(isFillStore);
  const [name, setName] = useState(nameStore);
  const [surname, setSurname] = useState(surnameStore);
  const [patronymic, setPatronymic] = useState(patronymicStore);

  useEffect(() => {
    if(name.length < 2 ) {
      setIsValid(false);
      return;
    }
    if(surname.length < 2 ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  }, [name, surname, patronymic]);

  useEffect(() => {
    changePetitionStore(isValid);
  }, [isValid])

  function changePetitionStore(isFill: boolean) {
    dispatch(changePetition({
      id,
      question: 'FIO',
      isFill
    }));
  }

  function changeTextInStore(
    text: string,
    item: 'name' | 'surname' | 'patronymic',
  ) {
    dispatch(changeItem({
      id,
      item: item,
      value: text,
    }));
  }

  function handleName(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    setName(text);
    changeTextInStore(text, 'name');
  }

  function handleSurame(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    setSurname(text);
    changeTextInStore(text, 'surname');
  }

  function handlePatronymic(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    setPatronymic(text);
    changeTextInStore(text, 'patronymic');
  }

  function navigate() {
    navigation.navigate('Home');
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling
        title={'ФИО заявителя'}
        currentNumber={4}
        navigation={navigation}
      />
      <View style={globalStyles.main}>
        <View style={{marginTop: 87}}>
          <FloatingLabelInput
            label="Имя"
            value={name}
            onChange={handleName}
            stylesContainer={{marginBottom: 32}}
          />
          <FloatingLabelInput
            label="Фамилия"
            value={surname}
            onChange={handleSurame}
            stylesContainer={{marginBottom: 32}}
          />
          <FloatingLabelInput
            label="Отчество"
            value={patronymic}
            onChange={handlePatronymic}
          />
          <Text
            style={[globalStyles.text, globalStyles.text12Reg, styles.span]}>
            При наличии
          </Text>
        </View>
        {isValid ? (
          <ButtonDone onPress={navigate} />
        ) : (
          <ButtonSkip onPress={navigate} />
        )}
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
    color: '#7B7B7B',
  },
});

export default FIOScreen;
