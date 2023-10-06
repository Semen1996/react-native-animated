import {View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import InputDropDown from '../../components/InputDropDown';
import {useAppDispatch, useAppSelector} from '../../hooks/hook';
import {addPetitionItem} from '../../store/petitionSlice';
import {useState} from 'react';
import ButtonDone from '../../components/ButtonDone';

function СitizenshipScreen(props: any) {
  const navigation = props.navigation;
  const dispatch = useAppDispatch();
  const petitionId = useAppSelector(state => state.petitions.currentPetition);
  const [citizenship, setСitizenship] = useState('');

  function handleFill() {
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'citizenship',
        value: citizenship,
      }),
    );
    navigation.navigate('Подача заявления с квотой или без');
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
          <InputDropDown setItem={setСitizenship} />
        </View>
        {citizenship ? (
          <ButtonDone onPress={() => handleFill()} />
        ) : (
          <ButtonSkip
            onPress={() => navigation.navigate('Подача заявления с квотой или без')}
          />
        )}
      </View>
    </View>
  );
}

export default СitizenshipScreen;
