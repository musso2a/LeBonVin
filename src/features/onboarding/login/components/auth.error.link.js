import React from 'react';
import {useNavigation} from '@react-navigation/native';
import SignUp from '../sign-up';
import Login from '../login.screen';
import LottieView from 'lottie-react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../themes/colors.config';
import {Button} from 'react-native-paper';

export default function goToConnect() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <LottieView
          style={styles.animation}
          source={require('../../../../assets/animations/gifglasse.gif')}
          autoPlay
          loop
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Vous voulez un verre ?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.buyButton}
          onPress={() => navigation.navigate('Login')}>
          SE CONNECTER
        </Button>
        <Button
          mode="contained"
          style={styles.exchangeButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: colors.lightPurple}}>S'INSCRIRE</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.lightPurple,
    flex: 0,
  },
  homeHead: {
    width: '100%',
    height: 30,
    backgroundColor: colors.lightPurple,
    marginTop: -10,
  },
  homeTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
  },
  main: {
    paddingTop: 70,
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  animation: {
    height: 200,
    width: 100,
  },
  buttonContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buyButton: {
    backgroundColor: colors.lightPurple,
  },
  exchangeButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.lightPurple,
  },
});
