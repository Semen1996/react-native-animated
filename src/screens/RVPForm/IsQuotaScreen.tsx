import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ButtonSkip from '../../components/ButtonSkip';
import HeaderFilling from '../../components/HeaderFilling';
import { Circle, Rect, Svg } from 'react-native-svg';
import { useState } from 'react';
import ButtonDone from '../../components/ButtonDone';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addPetitionItem } from '../../store/petitionSlice';

function IsQuotaScreen(props: any) {
  const navigation = props.navigation;

  const dispatch = useAppDispatch();
  const petitionId = useAppSelector(state => state.petitions.currentPetition);

  const [choice, setChoice] = useState('');

  function handleFill() {
    dispatch(
      addPetitionItem({
        id: petitionId,
        item: 'hasQuota',
        value: choice,
      }),
    );
    navigation.navigate('Мотивы получения РВП');
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling title={'Подача заявления планируется в пределах квоты или без учёта квоты?'} currentNumber={2} navigation={navigation}/>
      <View style={globalStyles.main}>
        <View style={{marginTop: 32}}>
        <Pressable onPress={() => setChoice('В пределах квоты')} style={styles.button}>
          <Text style={[globalStyles.text, globalStyles.text16Reg]}>В пределах квоты</Text>
          <Svg height={24} width={24}>
            <Circle cx="50%" cy="50%" r={8} stroke={choice === 'В пределах квоты' ? "#A99BFF" : "#2E2E2E"} strokeWidth="2" fill="none"/>
            {choice === 'В пределах квоты' && 
              <Circle cx="50%" cy="50%" r={5}  fill="#A99BFF"/>
            }
          </Svg>
        </Pressable>
        <Svg height="1" width="100%" style={{marginVertical: 10}}>
        <Rect
          x="5%"
          y="0"
          width="90%"
          height="100%"
          fill="#EAE6FF"
        />
      </Svg>
        <Pressable onPress={() => setChoice('Без учёта квоты')} style={styles.button}>
          <Text style={[globalStyles.text, globalStyles.text16Reg]}>Без учёта квоты</Text>
          <Svg height={24} width={24}>
            <Circle cx="50%" cy="50%" r={8} stroke={choice === 'Без учёта квоты' ? "#A99BFF" : "#2E2E2E"} strokeWidth="2" fill="none"/>
            {choice === 'Без учёта квоты' && 
              <Circle cx="50%" cy="50%" r={5}  fill="#A99BFF"/>
            }
          </Svg>
        </Pressable>
        </View>
        {
          choice ?
            <ButtonDone onPress={handleFill}/>
          :
            <ButtonSkip onPress={() => navigation.navigate('Мотивы получения РВП')} />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  }
});

export default IsQuotaScreen;
