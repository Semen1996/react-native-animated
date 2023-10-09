import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
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
import {addPetitionItem, changePetitionItem, fillPetitionItem} from '../../store/petitionSlice';
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
  const petition = useAppSelector(state => state.petitions.currentPetition);

  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState(petition ? petition.questions.name.value : '');
  const [surname, setSurname] = useState(petition ? petition.questions.surname.value : '');
  const [patronymic, setPatronymic] = useState(petition ? petition.questions.patronymic.value : '');

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
    handleFill();
  }, [name, surname, patronymic])

  function handleFill() {
    if (petition) {
      dispatch(
        addPetitionItem({
          id: petition.id,
          item: 'name',
          value: name,
        }),
      );
      dispatch(
        addPetitionItem({
          id: petition.id,
          item: 'surname',
          value: surname,
        }),
      );
      dispatch(
        addPetitionItem({
          id: petition.id,
          item: 'patronymic',
          value: patronymic,
        }),
      );
    }
  }

  function changeTextInStore(
    text: string,
    item: 'name' | 'surname' | 'patronymic',
  ) {
    if (petition) {
      dispatch(
        changePetitionItem({
          id: petition.id,
          item: item,
          value: text,
        }),
      );
    }
  }

  function setFillInStore(item: 'name' | 'surname' | 'patronymic') {
    if(petition) {
      dispatch(
        fillPetitionItem({
          id: petition.id,
          item,
        }),
      );
    }
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
