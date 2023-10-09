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
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addPetitionItem, changePetitionItem, fillPetitionItem } from '../../store/petitionSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FillingFormStackParamList } from '../../navigation/FillingForm';

type Props = NativeStackScreenProps<FillingFormStackParamList, 'Motives'>;

function MotivesScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const petition = useAppSelector(state => state.petitions.currentPetition);
  const [isFilled, setIsFilled] = useState(false);
  const [motives, setMotives] = useState(petition? petition.questions.motives.value : '');
  function navigate() {
    navigation.navigate('FIO');
  }

  function setFillInStore() {
    if(petition) {
      dispatch(
        fillPetitionItem({
          id: petition.id,
          item: 'motives',
        }),
      );
    }
  }

  function changeTextInStore(text: string) {
    if(petition) {
      dispatch(
        changePetitionItem({
          id: petition.id,
          item: 'motives',
          value: text,
        }),
      );
    }
  }

  function handleInput(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    setMotives(text)
    changeTextInStore(text);

    if(text.length >= 5) {
      setIsFilled(true);
      setFillInStore();
      return;
    }

    setIsFilled(false);
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling title={'Укажите мотивы, побудившие обратиться за получением РВП'} currentNumber={3} navigation={navigation}/>
      <View style={globalStyles.main}>
        <View style={{marginTop: 60}}>
          <TextInput style={[globalStyles.text, globalStyles.text16Reg, styles.input]}
          placeholder='Например, желание работать в РФ'
          inputMode='text'
          maxLength={300}
          multiline={true}
          value={motives}
          onChange={handleInput}/>
          <Text style={[globalStyles.text, globalStyles.text12Reg, styles.span]}>От 100 до 300 символов</Text>
        </View>
        {
          isFilled ?
            <ButtonDone onPress={navigate}/>
            :
            <ButtonSkip onPress={navigate} />
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

export default MotivesScreen;
