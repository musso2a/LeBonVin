import React, {useState} from 'react';
import firebase from '@react-native-firebase/app';
import colors from '../../../themes/colors.config';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Login extends React.Component {
  // state = {email: '', password: '', errorMessage: null};
  // handleLogin = () => {
  // const {email, password} = this.state;
  // firebase
  // .auth()
  // .signInWithEmailAndPassword(email, password)
  // .then(() => this.props.navigation.navigate('Home'))
  //  .catch(error => this.setState({errorMessage: error.message}));
  // console.log('handleLogin');
  //  console.log(this.state);
  // };
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  onSignIn = async () => {
    if (this.state.email && this.state.password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => this.props.navigation.navigate('Home'));
        alert('De retour !');
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('Déso on te connais pas');
            break;
          case 'auth/invalid-email':
            alert('Déso pas une adresse mail ça');
            break;
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

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={this.onSignIn}>
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
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
