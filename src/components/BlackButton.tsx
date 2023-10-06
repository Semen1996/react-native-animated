import {TouchableOpacity, StyleSheet} from 'react-native';
import BackIcon from '../images/Icons/arrow_back.svg';

function BackButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <BackIcon width={26} height={24} />
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