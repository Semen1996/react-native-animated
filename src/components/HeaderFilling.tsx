import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import CloseButton from './CloseButton';
import HelpButton from './HelpButton';
import VertButton from './VertButton';
import ProgressBar from './ProgressBar';
import { useAppDispatch, useAppSelector } from '../hooks/hook';

interface IHeader {
  currentNumber: number;
  title: string;
  navigation: any;
};

function HeaderFilling({currentNumber, title, navigation}: IHeader) {
  const petition = useAppSelector(state => {
    const id = state.petitions.currentID;
    return state.petitions.list.find(p => p.id === id);
  });

  let procentFilling = 0;
  let numOfPages = 0;
  if(petition) {
    procentFilling = petition.procent;
    numOfPages = petition.length;
  }


  return (
    <>
      <View style={styles.header}>
        <View style={styles.headersBtns}>
          <CloseButton onPress={() => navigation.navigate('Petitions')}/>
        </View>
        <Text style={[globalStyles.text, globalStyles.text18Mediun]}>
          {currentNumber}<Text style={{color: '#7B7B7B'}}>/{numOfPages}</Text>
        </Text>
        <View style={styles.headersBtns}>
          <HelpButton />
          <VertButton onPress={() => navigation.push('Questions')}/>
        </View>
      </View>
      <View style={{paddingHorizontal: 16}}>
        <ProgressBar procent={procentFilling} />
        <Text
          style={[
            globalStyles.text,
            globalStyles.text22Reg,
            {paddingBottom: 9},
          ]}>
          {title}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  headersBtns: {
    width: 102,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    color: '#1C1C1C',
    marginBottom: 24,
  },
});

export default HeaderFilling;
