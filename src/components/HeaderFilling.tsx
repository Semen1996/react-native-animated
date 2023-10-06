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
  const procentFilling = useAppSelector(state => {
    const petition = state.petitions.list.find(petition => petition.id === state.petitions.currentPetition);
    if(petition) return Math.floor(petition.progress/petition.length*100);
    return 0;
  });

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headersBtns}>
          <CloseButton onPress={() => navigation.navigate('Заявления')}/>
        </View>
        <Text style={[globalStyles.text, globalStyles.text18Mediun]}>
          {currentNumber}<Text style={{color: '#7B7B7B'}}>/40</Text>
        </Text>
        <View style={styles.headersBtns}>
          <HelpButton />
          <VertButton onPress={() => navigation.navigate("Список вопросов")}/>
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
