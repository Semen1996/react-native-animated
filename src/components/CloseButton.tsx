import {TouchableOpacity, StyleSheet} from 'react-native';
import CloseIcon from '../images/Icons/close.svg';

function CloseButton(props: any) {
  const onPress = props.onPress;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CloseIcon width={24} height={24} fill='#7B7B7B'/>
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

export default CloseButton;
