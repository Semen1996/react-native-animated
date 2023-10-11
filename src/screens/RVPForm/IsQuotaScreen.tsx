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
import { changeItem, changePetition } from '../../store/petitionSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FillingFormStackParamList } from '../../navigation/FillingForm';

type Props = NativeStackScreenProps<FillingFormStackParamList, 'IsQuota'>;

function IsQuotaScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const petition = useAppSelector(state => {
    const id = state.petitions.currentID;
    return state.petitions.list.find(p => p.id === id);
  });
  let id = '';
  let hasQuotaStore = '';

  if(petition) {
    id = petition.id;
    hasQuotaStore = petition.items.hasQuota;
  }

  const [hasQuota, setHasQuota] = useState(hasQuotaStore);

  function setItem(value: string): void {
    setHasQuota(value);
    dispatch(changeItem({
      id,
      item: 'hasQuota',
      value,
    }));
    dispatch(changePetition({
      id,
      question: 'hasQuota',
      isFill: true,
    }));
  }

  function navigate() {
    navigation.navigate('Motives');
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling title={'Подача заявления планируется в пределах квоты или без учёта квоты?'} currentNumber={2} navigation={navigation}/>
      <View style={globalStyles.main}>
        <View style={{marginTop: 32}}>
        <Pressable onPress={() => setItem('В пределах квоты')} style={styles.button}>
          <Text style={[globalStyles.text, globalStyles.text16Reg]}>В пределах квоты</Text>
          <Svg height={24} width={24}>
            <Circle cx="50%" cy="50%" r={8} stroke={hasQuota === 'В пределах квоты' ? "#A99BFF" : "#2E2E2E"} strokeWidth="2" fill="none"/>
            {hasQuota === 'В пределах квоты' && 
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
        <Pressable onPress={() => setItem('Без учёта квоты')} style={styles.button}>
          <Text style={[globalStyles.text, globalStyles.text16Reg]}>Без учёта квоты</Text>
          <Svg height={24} width={24}>
            <Circle cx="50%" cy="50%" r={8} stroke={hasQuota === 'Без учёта квоты' ? "#A99BFF" : "#2E2E2E"} strokeWidth="2" fill="none"/>
            {hasQuota === 'Без учёта квоты' && 
              <Circle cx="50%" cy="50%" r={5}  fill="#A99BFF"/>
            }
          </Svg>
        </Pressable>
        </View>
        {
          hasQuota ?
            <ButtonDone onPress={navigate}/>
          :
            <ButtonSkip onPress={navigate} />
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
