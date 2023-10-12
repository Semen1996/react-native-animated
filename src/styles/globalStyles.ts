import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontFamily: 'Roboto',
    color: '#1C1C1C',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.1
  },
  text12Reg: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  text12Med: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15.96,
    letterSpacing: 0.2,
  },
  text14Med: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
  text14Reg: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  text16Med: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  text16Reg: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  text18Mediun: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 23,
    letterSpacing: 0.15,
  },
  text20Mediun: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  text22Reg: {
    fontSize: 22,
    lineHeight: 28,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },

});

export default globalStyles;