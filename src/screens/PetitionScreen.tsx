import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { Rect, Svg } from "react-native-svg";
import { useAppSelector } from "../hooks/hook";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigation/BottomTabs";
import { IPetition } from "../store/petitionSlice";
import Point from "../components/PetitionScreen/Point";
import Petition from "../components/PetitionScreen/Petition";
import EmptyPetition from "../components/PetitionScreen/EmptyPetition";
import Separator from "../components/PetitionScreen/Separator";
import { PetitionStackParamList } from "../navigation/PetitionStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/Navigator";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList,'Petitions'>,
  NativeStackScreenProps<RootStackParamList>
>;

function PetitionScreen({navigation}: Props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const petitions = useAppSelector(state => state.petitions.list);

  let petitionsReady: IPetition[] = [];
  let petitionsProcess: IPetition[] = [];
  petitions.forEach((petition) => {
    if(petition.isFill) {
      petitionsReady.push(petition)
    } else {
      petitionsProcess.push(petition);
    }
  });

  function navigateInProgress(petition: IPetition) {
    navigation.navigate('PetitionStack', {screen: 'InProgress', params: {petition}})
  }

  function navigateReady(petition: IPetition) {
    navigation.navigate('PetitionStack', {screen: 'Ready', params: {petition}})
  }

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
          <View style={{flexDirection: 'row'}}>
            <Point isFill={false}/>
            <Text style={styles.btnListTitle}>В процессе</Text>
          </View>
          <Text style={styles.btnListSumm}>{petitionsProcess.length}</Text>
        </TouchableOpacity>
        <View style={!isOpen1 && styles.cardHide}>
          {
            petitionsProcess.length ?
              petitionsProcess.map(petition => <Petition petition={petition} navigate={navigateInProgress}/>)
            :
            <EmptyPetition/>
          }
        </View>
        <View style={{marginVertical: 16}}>
          <Separator/>
        </View>
        <TouchableOpacity
          style={[styles.btnList, isOpen2 && styles.btnListOn]}
          onPress={() => setIsOpen2(!isOpen2)}
          >
          <View style={{flexDirection: 'row'}}>
            <Point isFill={true}/>
            <Text style={styles.btnListTitle}>Готовые</Text>
          </View>
          <Text style={styles.btnListSumm}>{petitionsReady.length}</Text>
        </TouchableOpacity>
        <View style={!isOpen2 && styles.cardHide}>
          {
            petitionsReady.length ?
              petitionsReady.map(petition => <Petition petition={petition} navigate={navigateReady}/>)
            :
              <EmptyPetition/>
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
    marginLeft: 12,
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
  cardHide: {
    display: 'none',
  }
});

export default PetitionScreen;