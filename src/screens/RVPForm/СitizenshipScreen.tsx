import {View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import InputDropDown from '../../components/InputDropDown';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {addPetitionItem} from '../../store/petitionSlice';
import {useState} from 'react';
import ButtonDone from '../../components/ButtonDone';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FillingFormStackParamList } from '../../navigation/FillingForm';

type Props = NativeStackScreenProps<FillingFormStackParamList, 'Сitizenship'>;

function СitizenshipScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const [isFill, setIsFill] = useState(false);
  const petition = useAppSelector(state => state.petitions.currentPetition);
  function addItem(value: string): void {
      if(petition) {
        setIsFill(true);
        dispatch(
          addPetitionItem({
            id: petition.id,
            item: 'citizenship',
            value,
          }),
        );
      }
  }

  function navigate() {
    navigation.navigate('IsQuota');
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling
        title={'Укажите текущее гражданство заявителя'}
        currentNumber={1}
        navigation={navigation}
      />
      <View style={globalStyles.main}>
        <View style={{marginTop: 56}}>
          <InputDropDown setItem={addItem} inputItem={petition?.questions.citizenship.value}/>
        </View>
        {isFill ? (
          <ButtonDone onPress={navigate} />
        ) : (
          <ButtonSkip
            onPress={navigate}
          />
        )}
      </View>
    </View>
  );
}

export default СitizenshipScreen;
