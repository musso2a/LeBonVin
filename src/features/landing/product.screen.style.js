import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: 'white',
  },
  scrollContainer: {
    height: 200,
    borderWidth: 1,
    borderBottomColor: colors.lightPurple,
    borderTopColor: 'white',
  },
  contentImg: {
    position: 'relative',
    marginRight: 0,
  },
  productImg: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderColor: colors.lightPurple,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 10,
  },
  wineName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 9,
  },
  wineYear: {
    marginTop: 20,
  },
  wineCondition: {
    marginTop: 5,
  },
  winePrice: {
    marginTop: 5,
  },
  wineDescription: {
    marginTop: 30,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  divider: {
    backgroundColor: colors.lightPurple,
    paddingBottom: 3,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
  },
  wineNote: {
    height: 50,
    backgroundColor: colors.lightPurple,
    paddingBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  webInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //borderWidth: 1,
    justifySelf: 'center',
    width: '100%',
    height: 50,
  },
  wineInfo: {
    color: 'white',
    marginTop: 15,
  },
  buttonContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //borderWidth: 1,
    //borderColor: colors.red,
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: colors.lightPurple,
  },
  exchangeButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.lightPurple,
  },
  userBox: {
    width: '100%',
    height: 90,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountImg: {
    height: 40,
    width: 40,
    borderColor: colors.lightPurple,
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 10,
  },
  messagePreview: {
    //borderColor: colors.red,
    //borderWidth: 1,
    height: 'auto',
    marginTop: 10,
    marginLeft: 10,
    width: '70%',
  },
  userName: {
    fontSize: 15,
  },
  userNote: {
    fontSize: 10,
    fontWeight: '500',
  },
  userBottle: {
    fontSize: 10,
    fontWeight: '500',
  },
  iconTo: {
    marginRight: 10,
  },
});

export default styles;
