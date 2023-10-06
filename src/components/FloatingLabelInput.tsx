import {View, Text, TextInput, StyleSheet} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {useState} from 'react';

interface IInput {
  label: string;
  value: string;
  onChange: any;
  stylesContainer?: any;
}

function FloatingLabelInput({label, value, onChange, stylesContainer}: IInput) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, stylesContainer]}>
      {isFocused && (
        <Text
          style={[
            globalStyles.text,
            globalStyles.text12Reg,
            {color: '#7B7B7B'},
          ]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[globalStyles.text, globalStyles.text16Reg, {padding: 0}]}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={onChange}
        value={value}
        placeholder={isFocused ? '' : label}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DAD8D5',
  },
});

export default FloatingLabelInput;
