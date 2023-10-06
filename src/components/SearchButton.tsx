import {TouchableOpacity, StyleSheet} from 'react-native';
import SearchIcon from '../images/Icons/search.svg';

function SearchButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <SearchIcon width={24} height={24} fill='#2E2E2E'/>
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

export default SearchButton;
