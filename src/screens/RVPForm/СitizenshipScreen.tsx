import {View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import InputDropDown from '../../components/InputDropDown';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {changeItem, changePetition} from '../../store/petitionSlice';
import {useState} from 'react';
import ButtonDone from '../../components/ButtonDone';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RVPFormStackParamList } from '../../navigation/RVPForm';

type Props = NativeStackScreenProps<RVPFormStackParamList, 'Сitizenship'>;

function СitizenshipScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const petition = useAppSelector(state => {
    const id = state.petitions.currentID;
    return state.petitions.list.find(p => p.id === id);
  });

  let id = '';
  let citizenshipStore = '';

  if(petition) {
    id = petition.id;
    citizenshipStore = petition.items.citizenship;
  }
  const [citizenship, setCitizenship] = useState(citizenshipStore);

  function setItem(value: string): void {
    setCitizenship(value);
    dispatch(changeItem({
      id,
      item: 'citizenship',
      value,
    }));

    dispatch(changePetition({
      id,
      question: 'citizenship',
      isFill: true,
    }));
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
          <InputDropDown setItem={setItem} inputItem={citizenship}/>
        </View>
        {citizenship ? (
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
