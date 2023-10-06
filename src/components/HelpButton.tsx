import {TouchableOpacity, StyleSheet} from 'react-native';
import HelpIcon from '../images/Icons/help.svg';

function HelpButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <HelpIcon width={24} height={24} fill='#7B7B7B'/>
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

export default HelpButton;
