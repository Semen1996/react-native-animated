import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { Rect, Svg } from "react-native-svg";
import { useAppSelector } from "../hooks/hook";

function PetitionScreen(props: any) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const petitions = useAppSelector(state => state.petitions.list);

  let petitionsReady = [];
  let petitionsProcess = [];
  petitions.forEach((petition) => {
    if(petition.isFill) {
      petitionsReady.push(petition)
    } else {
      petitionsProcess.push(petition);
    }
  });

  const navigation = props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Заявления</Text>
      </View>
      <View style={styles.main}>
      <TouchableOpacity
        style={[styles.btnList, isOpen1 && styles.btnListOn]}
        onPress={() => setIsOpen1(!isOpen1)}
      >
        <Text style={styles.btnListTitle}>В процессе</Text>
        <Text style={styles.btnListSumm}>{petitionsProcess.length}</Text>
      </TouchableOpacity>
      <View style={!isOpen1 && styles.cardHide}>
        {
          petitionsProcess.length ?
          petitionsProcess.map(petition => {
            return(
            <TouchableOpacity style={styles.card} key={petition.id}>
              <Text style={styles.cardTitle}>{petition.titleForm}</Text>
              <View style={styles.cardData}>
                <Text style={styles.cardDataText}>ФИО: <Text style={styles.cardDataTextUser}>{petition.surname} {petition.name} {petition.patronymic}</Text></Text>
                <Text style={styles.cardDataText}>Гражданство: <Text style={styles.cardDataTextUser}>{petition.citizenship}</Text></Text>
                <Text style={styles.cardDataText}>Дата обновления: <Text style={styles.cardDataTextUser}>01.12.2022</Text></Text>
              </View>
            </TouchableOpacity>
            )
          })
          :
          <View style={styles.card}>
          <Text style={styles.cardEmptyText}>У вас пока нет заявлений</Text>
          <TouchableOpacity
            style={styles.cardEmptyBtn}
            onPress={() => navigation.navigate('Главная')}
          >
            <Text style={styles.cardEmptyBtnText}>Заполнить заявление</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
      <Svg height="1" width="100%" style={{marginVertical: 16}}>
        <Rect
          x="5%"
          y="0"
          width="90%"
          height="100%"
          fill="#EAE6FF"
        />
      </Svg>
      <TouchableOpacity
        style={[styles.btnList, isOpen2 && styles.btnListOn]}
        onPress={() => setIsOpen2(!isOpen2)}
        >
        <Text style={styles.btnListTitle}>Готовые</Text>
        <Text style={styles.btnListSumm}>{petitionsReady.length}</Text>
      </TouchableOpacity>
      <View style={!isOpen2 && styles.cardHide}>
        {
          petitionsReady.length ?

          petitionsReady.map(petition => {
            return(
            <TouchableOpacity style={styles.card} key={petition.id}>
              <Text style={styles.cardTitle}>{petition.titleForm}</Text>
              <View style={styles.cardData}>
                <Text style={styles.cardDataText}>ФИО: <Text style={styles.cardDataTextUser}>{petition.surname} {petition.name} {petition.patronymic}</Text></Text>
                <Text style={styles.cardDataText}>Гражданство: <Text style={styles.cardDataTextUser}>{petition.citizenship}</Text></Text>
                <Text style={styles.cardDataText}>Дата обновления: <Text style={styles.cardDataTextUser}>01.12.2022</Text></Text>
              </View>
            </TouchableOpacity>
            )
          })
          :
          <View style={styles.card}>
          <Text style={styles.cardEmptyText}>У вас пока нет заявлений</Text>
          <TouchableOpacity
            style={styles.cardEmptyBtn}
            onPress={() => navigation.navigate('Главная')}
          >
            <Text style={styles.cardEmptyBtnText}>Заполнить заявление</Text>
          </TouchableOpacity>
        </View>
        }
      </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 23,
    letterSpacing: 0.15,
    color: '#1C1C1C',
  },
  main: {
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  btnList: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 24,
    borderRadius: 100,
    backgroundColor: '#F4F4F4',
  },
  btnListOn: {
    backgroundColor: '#EAE6FF',
  },
  btnListTitle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#1C1C1C',
  },
  btnListSumm: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#1C1C1C',
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    backgroundColor: '#F4F4F4',
    // backgroundColor: '#FCFCFC',
    borderRadius: 14,
  },
  cardHide: {
    display: 'none',
  },
  cardEmptyText: {
    marginTop: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.15,
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
  cardEmptyBtnText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#FFFFFF'
  },
  cardTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
    color: '#1C1C1C',
  },
  cardData: {
    marginVertical: 6,
  },
  cardDataText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
    opacity: 0.8,
  },
  cardDataTextUser: {
    fontWeight: '500',
    color: '#1C1C1C',
  }

});

export default PetitionScreen;