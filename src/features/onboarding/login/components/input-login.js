import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import colors from '../../../../themes/colors.config';
const {width, height} = Dimensions.get('window');

export const InputLogin = ({
  titre = 'Information',
  type = 'normal',
  value = '',
  onChangeText,
}) => {
  return (
    <View style={styles.allInputContainer}>
      <Text style={styles.inputLabel}>{titre}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputContent}
          value={value}
          onChangeText={onChangeText}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={type === 'password'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allInputContainer: {
    borderColor: '#5A5A5A',
    borderWidth: 1,
  },
  inputLabel: {
    color: 'black',
    fontSize: 20,
    marginTop: 40,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 40,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 200,
    height: 45,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContent: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

export default InputLogin;
