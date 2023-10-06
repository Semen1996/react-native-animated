import {TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

function ButtonDone(props: any) {
  const onPress = props.onPress;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={[globalStyles.text, styles.btnText]}>Далее</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37C561',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF'
  }
});

export default ButtonDone;