import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import NextIcon from '../images/Icons/navigate_next.svg';
import { Shadow } from "react-native-shadow-2";
import { TabStackParamList } from "../navigation/BottomTabs";
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Navigator";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList,'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

function HomeScreen({navigation}: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </View>
        <Shadow startColor={'#1C1C1C1A'} offset={[0, 4]} style={{marginBottom: 16, width: '100%'}}>
          <TouchableOpacity style={[styles.card, styles.cardColorPurple]}>
            <Text style={styles.cardTitle}>Оформление патента на работу</Text>
            <Text style={styles.cardText}>Разрешение на работу для иностранцев, которым не требуется въездная виза</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardPrice}>399 Р</Text>
              <NextIcon width='24' height='24' style={[styles.cardNext, styles.cardNextColorPurple]}/>
            </View>
          </TouchableOpacity>
        </Shadow>
      <Shadow distance={4} startColor={'#1C1C1C1A'} offset={[0, 4]} style={{marginBottom: 16, width: '100%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('RVPForm')} style={[styles.card, styles.cardColorPink]}>
          <Text style={styles.cardTitle}>Заявление о выдаче РВП</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardPrice}>399 Р</Text>
            <NextIcon width='24' height='24' style={[styles.cardNext, styles.cardNextColorPink]}/>
          </View>
        </TouchableOpacity>
      </Shadow>
      <Shadow distance={4} startColor={'#1C1C1C1A'} offset={[0, 4]} style={{marginBottom: 16, width: '100%'}}>
        <TouchableOpacity style={[styles.card, styles.cardColorYellow]}>
          <Text style={styles.cardTitle}>Заявление о выдаче ВНЖ</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardPrice}>499 Р</Text>
            <NextIcon width='24' height='24' style={[styles.cardNext, styles.cardNextColorYellow]}/>
          </View>
        </TouchableOpacity>
      </Shadow>
      <Shadow distance={4} startColor={'#1C1C1C1A'} offset={[0, 4]} style={{marginBottom: 16, width: '100%'}}>
      <TouchableOpacity style={[styles.card, styles.cardColorGreen]}>
        <Text style={styles.cardTitle}>Заявление на Гражданство РФ</Text>
        <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>399 Р</Text>
          <NextIcon width='24' height='24' style={[styles.cardNext, styles.cardNextColorGreen]}/>
        </View>
      </TouchableOpacity>
      </Shadow>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#FFF',
  },
  header: {
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 24,
    resizeMode: 'contain',
  },

  card: {
    borderRadius: 14,
    backgroundColor: '#EAE6FF',
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 12,
  },
  cardColorPurple: {
    backgroundColor: '#D4CDFF'
  },
  cardColorPink: {
    backgroundColor: '#FFEFED'
  },
  cardColorYellow: {
    backgroundColor: '#FFFBDF'
  },
  cardColorGreen: {
    backgroundColor: '#E3FFF2'
  },
  cardTitle: {
    color: "#1C1C1C",
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 23.84,
    fontWeight: '900',
    letterSpacing: 0.15,
  },
  cardText: {
    color: "#2E2E2E",
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  cardFooter: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardPrice: {
    color: "#1D1B20",
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 23.4,
    fontWeight: '900',
    letterSpacing: 0.15,
  },
  cardNext: {
    borderRadius: 22,
  },
  cardNextColorPurple: {
    backgroundColor: '#A99BFF'
  },
  cardNextColorPink: {
    backgroundColor: '#FFBEB5'
  },
  cardNextColorYellow: {
    backgroundColor: '#FFEE82'
  },
  cardNextColorGreen: {
    backgroundColor: '#8FFFC9'
  },
});

export default HomeScreen;