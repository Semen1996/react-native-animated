import {TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'react-native';
import globalStyles from '../../styles/globalStyles';

function ButtonBlack(props: any) {
  const onPress = props.onPress;
  const title = props.title;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={[globalStyles.text, styles.btnText]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF'
  }
});

export default ButtonBlack;