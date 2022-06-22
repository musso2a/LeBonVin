import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  searchBox: {
    height: '15%',
    //borderBottomColor: colors.lightPurple,
    //borderTopColor: 'none',
    //borderRight: 'none',
    //borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '85%',
    shadowOpacity: 0,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: 5,
  },
  searchContainer: {
    height: 350,
    //borderColor: colors.red,
    //borderWidth: 1,
  },
  titleText: {
    marginLeft: 29,
    marginBottom: 10,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '50%',
    // borderColor: colors.lightPurple,
    // borderWidth: 1,
  },
  wineColor: {
    width: 150,
    height: 150,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
  },
  wineColorImg: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: colors.lightPurple,
    borderWidth: 1,
  },
  divider: {
    backgroundColor: colors.lightPurple,
    paddingBottom: 3,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 25,
  },
  randomContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
  },
  randomButton: {
    width: 300,
    height: 80,
    marginTop: 5,
  },
  randomWineImg: {
    width: 300,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: colors.lightPurple,
    borderWidth: 2,
  },
});

export default styles;
