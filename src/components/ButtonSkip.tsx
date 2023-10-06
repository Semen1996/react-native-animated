import {TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

function ButtonSkip(props: any) {
  const onPress = props.onPress;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={[globalStyles.text, styles.btnText]}>Пропустить</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#A99BFF'
  }
});

export default ButtonSkip;