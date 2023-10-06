import {TouchableOpacity, StyleSheet} from 'react-native';
import BackIcon from '../images/Icons/arrow_back.svg';

function BackButton(props: any) {
  const onPress = props.onPress;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <BackIcon width={26} height={24} fill='#2E2E2E'/>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
