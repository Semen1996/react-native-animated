import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import globalStyles from '../styles/globalStyles';
import SearchButton from './SearchButton';
import CloseButton from './CloseButton';

const countriesWithFlags = [
  {
    title: 'Россия',
    image: require('../images/flags/Russia.png'),
  },
  {
    title: 'Таджикистан',
    image: require('../images/flags/Tajikistan.png'),
  },
  {
    title: 'Узбекистан',
    image: require('../images/flags/Uzbekistan.png'),
  },
];

function InputDropDown(props: any) {
  const setItem = props.setItem;

  const [countries, setCountries] = useState(countriesWithFlags);
  const [selectCountry, setSelectCountry] = useState('Выберите гражданство');
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<TextInput | null>(null);

  function handleInput(evt: NativeSyntheticEvent<TextInputChangeEventData>): void {
    const text = evt.nativeEvent.text;
    const trueCountries = countriesWithFlags.filter((country) => country.title.toLowerCase().includes(text.toLowerCase()));
    setCountries(trueCountries);
    setInput(text);
  }

  useEffect(() => {
    if(isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <View style={styles.container}>
      {
        !isOpen ?
          <TouchableOpacity
            onPress={() => {
              setIsOpen(true);
            }}
            style={styles.search}>
            {selectCountry !== 'Выберите гражданство' &&
              <Image style={styles.inputImage} source={countriesWithFlags.find(c => c.title === selectCountry)?.image} />
            }
            <Text style={[globalStyles.text, styles.input]}>
              {selectCountry}
              </Text>
            <SearchButton />
          </TouchableOpacity>
        :
        <>
        <View style={styles.search}>
          <TextInput
            style={[globalStyles.text, styles.input]}
            onChange={handleInput}
            value={input}
            ref={inputRef}
          />
          <CloseButton onPress={() => {
            setInput('');
            setCountries(countriesWithFlags);
          }} />
        </View>
        <FlatList
          data={countries}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {

                setSelectCountry(item.title);
                setInput(item.title);
                setItem(item.title);
                setIsOpen(false);
                }}
                style={styles.item}>
                <Image style={styles.itemImage} source={item.image} />
                <Text style={[globalStyles.text,globalStyles.text16Reg]}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
        </>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    backgroundColor: '#F4F4F4',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  inputImage: {
    marginLeft: 16,
    width: 24,
    height: 24,
  },
  list: {
    display: 'flex'
  },
  item: {
    height: 56,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemImage: {
    height: 40,
    width: 40,
    marginRight: 16,
  }
});

export default InputDropDown;
