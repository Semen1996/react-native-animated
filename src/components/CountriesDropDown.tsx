import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import globalStyles from '../styles/globalStyles';

const countriesWithFlags = [
  {
    title: 'Русский',
    image: require('../images/flags/Russia.png'),
    codeISO: 'Ru',
  },
  {
    title: 'Точикий',
    image: require('../images/flags/Tajikistan.png'),
    codeISO: 'Tj',
  },
  {
    title: "O'zbek",
    image: require('../images/flags/Uzbekistan.png'),
    codeISO: 'Uz',
  },
];

function CountriesDropDown() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SelectDropdown
      data={countriesWithFlags}
      defaultValueByIndex={0}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      onFocus={() => setIsOpened(true)}
      onBlur={() => setIsOpened(false)}
      buttonStyle={styles.dropdownBtn}
      renderCustomizedButtonChild={(selectedItem, index) => {
        return (
          selectedItem && (
            <View style={styles.dropdownBtnChild}>
              <View
                style={[
                  styles.langSelect,
                  isOpened && styles.dropdownSelected,
                ]}>
                <Image
                  source={selectedItem.image}
                  style={styles.dropdownBtnImg}
                />
                <Text style={[globalStyles.text, styles.dropdownBtnTxt]}>
                  {selectedItem.codeISO}
                </Text>
              </View>
            </View>
          )
        );
      }}
      dropdownStyle={styles.dropdownDropdown}
      dropdownOverlayColor="none"
      showsVerticalScrollIndicator={false}
      rowStyle={styles.dropdownRow}
      selectedRowStyle={styles.dropdownSelected}
      renderCustomizedRowChild={(item, index) => {
        return (
          <View style={styles.dropdownRowChild}>
            <Image source={item.image} style={styles.dropdownRowImage} />
            <Text style={[globalStyles.text, styles.dropdownRowTxt]}>{item.title}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  langSelect: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    paddingVertical: 11,
    paddingHorizontal: 12,
  },

  dropdownBtnImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  dropdownBtnTxt: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#7B7B7B',
    paddingLeft: 8,
  },

  dropdownBtn: {
    zIndex: 2,
    width: 134,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  dropdownBtnChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  dropdownDropdown: {
    backgroundColor: '#F4F4F4',
    borderRadius: 24,
    paddingVertical: 8,
    marginTop: 8,
    maxHeight: 300,
  },

  dropdownRow: {
    height: 40,
    borderBottomWidth: 0,
  },

  dropdownSelected: {
    backgroundColor: '#EAE6FF',
  },

  dropdownRowChild: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 12,
  },
  dropdownRowImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  dropdownRowTxt: {
    paddingLeft: 8,
    fontSize: 16,
    lineHeight: 24,
    color: '#2E2E2E',
  },
});

export default CountriesDropDown;
