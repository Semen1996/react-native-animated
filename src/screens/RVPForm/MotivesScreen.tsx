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
import { addPetitionItem } from '../../store/petitionSlice';

function MotivesScreen(props: any) {
  const navigation = props.navigation;
  const dispatch = useAppDispatch();
  const petitionId = useAppSelector(state => state.petitions.currentPetition);
  const [isFilled, setIsFilled] = useState(false);
  const [motives, setMotives] = useState('');
  function handleFill() {
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'motives',
        value: motives,
      }),
    );
    navigation.navigate('ФИО');
  }

  function handleInput(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    if(text.length >= 5) {
      setIsFilled(true);
      setMotives(text)
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
          onChange={handleInput}/>
          <Text style={[globalStyles.text, globalStyles.text12Reg, styles.span]}>От 100 до 300 символов</Text>
        </View>
        {
          isFilled ?
            <ButtonDone onPress={handleFill}/>
            :
            <ButtonSkip onPress={() => navigation.navigate('ФИО')} />
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
