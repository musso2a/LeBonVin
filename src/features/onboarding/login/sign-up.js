import React, {useState, useEffect} from 'react';
import colors from '../../../themes/colors.config';
import firebase from '@react-native-firebase/app';
import {Switch} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
//import * as firebase from 'firebase/app';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class SignUp extends React.Component {
  //state = {email: '', password: '', errorMessage: null};

  // const [checked, setChecked] = React.useState('first');
  // const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  //handleSignUp = () => {
  // const {email, password} = this.state;
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(user => this.props.navigation.navigate('Home'))
  //  .catch(error => this.setState({errorMessage: error.message}));
  // console.log('handleSignup');
  // console.log(this.state);
  //};

  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: '',
      isLoading: false,
    };
  }

  onSignUp = async () => {
    if (this.state.email && this.state.password) {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => this.props.navigation.navigate('Home'));
        alert('Bienvenue');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('User already exist');
        }
      }
    } else {
      alert('Please enter mail and password');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/logo2.png')}
        />
        <Text style={styles.underTxt}>
          Le vin vielli quand vous n'êtes pas là{' '}
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nom"
            placeholderTextColor="black"
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Mot de passe"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.radioBtn}>
          <Switch
            //value={isSwitchOn}
            //onValueChange={onToggleSwitch}
            color={'#694BC0'}
            style={styles.switch}
          />
          <Text style={styles.majorTxt}> Je certifie etre majeur</Text>
        </View>
        <Image
          style={styles.banner}
          source={require('../../../assets/interdiction.jpeg')}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={this.onSignUp}>
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  radioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRadio: {
    borderRadius: 1,
    borderColor: colors.lightPurple,
  },
  majorTxt: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  underTxt: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    width: 240,
  },

  banner: {
    height: 50,
    width: 350,
    marginTop: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: colors.lightPurple,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
