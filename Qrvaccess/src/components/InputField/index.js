import React from 'react';
import { TextInput, StyleSheet, Text} from 'react-native';

const InputField = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
   
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'gray',
    marginTop:5
  },
});

export default InputField;
