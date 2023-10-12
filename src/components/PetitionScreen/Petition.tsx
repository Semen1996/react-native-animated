import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { IPetition } from "../../store/petitionSlice";
import PointPetition from "../../components/PetitionScreen/PointPetition";
import colors from "../../utils/colors";
import globalStyles from "../../styles/globalStyles";
import ProgressBar from "../../components/PetitionScreen/ProgressBar";
import { titleFormRVP } from "../../utils/RVPForm";
import { titleFormWorking } from "../../utils/WorkingForm";

function Petition({petition, navigate}: {petition: IPetition, navigate: any}) {
  function determineItemsForm(form: string): {colorItem: string, titleForm: string} {
    let colorItem = 'black';
    let titleForm = '';

    if(form === 'RVPForm') {
      colorItem = colors.pink;
      titleForm = titleFormRVP;
    } else if(form === 'WorkingForm') {
      colorItem = colors.purple;
      titleForm = titleFormWorking;
    }
    return {colorItem, titleForm};
  }

  function handleButton() {
    navigate(petition);
  }

  const procent = Math.floor((petition.progress / petition.length) * 100);
  const {colorItem, titleForm} = determineItemsForm(petition.form);

  return (
    <TouchableOpacity onPress={handleButton} style={styles.card} key={petition.id}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PointPetition color={colorItem} />
        <Text style={[ globalStyles.text, globalStyles.text16Med, {paddingLeft: 12} ]}>
          {titleForm}
        </Text>
      </View>
      <View style={styles.cardData}>
        <Text style={[globalStyles.text, globalStyles.text14Reg, styles.cardDataText]}>
          ФИО:{' '}
          <Text style={[globalStyles.text, globalStyles.text14Med]}>
            {petition.items.surname} {petition.items.name} {petition.items.patronymic}
          </Text>
        </Text>
        <Text style={[globalStyles.text, globalStyles.text14Reg, styles.cardDataText]}>
          Гражданство:{' '}
          <Text style={[globalStyles.text, globalStyles.text14Med]}>
            {petition.items.citizenship}
          </Text>
        </Text>
        <Text style={[globalStyles.text, globalStyles.text14Reg, styles.cardDataText]}>
          Дата обновления:{' '}
          <Text style={[globalStyles.text, globalStyles.text14Med]}>{petition.update}</Text>
        </Text>
      </View>
      <View style={{marginTop: 6}}>
        <ProgressBar procent={procent} />
      </View>
    </TouchableOpacity>
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
  cardData: {
    marginVertical: 6,
  },
  cardDataText: {
    color: '#2E2E2E',
    opacity: 0.8,
  },
});

export default Petition;
