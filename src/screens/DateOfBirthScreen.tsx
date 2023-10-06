import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {useState} from 'react';
import globalStyles from '../styles/globalStyles';
import ButtonSkip from '../components/ButtonSkip';
import HeaderFilling from '../components/HeaderFilling';
import ButtonDone from '../components/ButtonDone';

function DateOfBirthScreen(props: any) {
  const navigation = props.navigation;

  const [isFilled, setIsFilled] = useState(false);

  function handleName(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    if(text.length >= 2) {
      setIsFilled(true);
      return;
    }
    setIsFilled(false);
  }

  return (
    <View style={globalStyles.container}>
      <HeaderFilling title={'Дата рождения'} currentNumber={5} navigation={navigation}/>
      <View style={globalStyles.main}>
        <View style={{marginTop: 87}}>
        
        </View>
        {
          isFilled ?
            <ButtonDone onPress={() => navigation.navigate('BottomTabs')}/>
            :
            <ButtonSkip onPress={() => navigation.navigate('BottomTabs')} />
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

export default DateOfBirthScreen;
