import {View, StyleSheet, Text} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BackButton from '../BackButton';

interface IHeader {
  title: string;
  navigation: any;
}

function Header({title, navigation}: IHeader) {
  return (
    <View style={styles.header}>
      <View style={styles.headersBtn}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <Text style={[globalStyles.text, globalStyles.text18Mediun]}>
        {title}
      </Text>
      <View style={styles.headersBtn}></View>
    </View>
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
  headersBtn: {
    width: 48,
  },
});

export default Header;
