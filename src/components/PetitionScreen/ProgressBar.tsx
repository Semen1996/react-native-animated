import { View, StyleSheet, Text } from 'react-native';
import globalStyles from '../../styles/globalStyles';

interface IProcent {
  procent: number
}

function ProgressBar({procent}: IProcent) {

  return (
    <View style={styles.progressBar}>
      <View style={styles.bar}>
        <View style={[styles.barLine, {width: `${procent}%`}]}></View>
      </View>
      <View style={styles.barProcent}>
        <Text style={[globalStyles.text, globalStyles.text14Med]}>{procent}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bar: {
    flex: 1,
    height: 8,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: '#DAD8D5',
  },
  barLine: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: '#A99BFF',
    opacity: 0.6,
  },
  barProcent: {
    width: 46,
    alignItems: 'flex-end'
  },
});

export default ProgressBar;
