import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

function EmptyPetition(props: any) {
  const onPress = props.onPress;
  return (
    <View style={styles.card}>
      <Text style={[globalStyles.text, globalStyles.text16Reg, styles.cardEmptyText]}>У вас пока нет заявлений</Text>
      <TouchableOpacity
        style={styles.cardEmptyBtn}
        onPress={onPress}
      >
        <Text style={[globalStyles.text, globalStyles.text14Med, {color: '#FFF'}]}>Заполнить заявление</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    backgroundColor: '#F4F4F4',
    // backgroundColor: '#FCFCFC',
    borderRadius: 14,
  },
  cardEmptyText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#2E2E2E',
    opacity: 0.7,
  },
  cardEmptyBtn: {
    width: 194,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: '#1C1C1C',
  },
});

export default EmptyPetition;
