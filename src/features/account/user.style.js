import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  accountContainer: {
    height: 130,
    width: '100%',
    flex: 1,
    //borderWidth: 1,
  },
  parameterContainer: {
    height: 35,
    width: '100%',
    alignItems: 'flex-end',
  },
  iconCog: {
    width: 35,
    height: 35,
  },
  profilPicContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  profilContainerLeft: {
    height: 80,
    width: 100,
    alignItems: 'center',
  },
  accountImg: {
    height: 80,
    width: 80,
    borderColor: colors.lightPurple,
    borderRadius: 40,
    borderWidth: 1,
  },
  profilContainerRight: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    height: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  divider: {
    backgroundColor: colors.lightPurple,
    paddingBottom: 3,
    marginRight: 30,
    marginLeft: 30,
  },
  ////////

  caveTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 5,
    marginLeft: 24,
    height: 30,
  },

  colContainer: {
    width: '100%',
    height: 500,
    marginLeft: 24,
  },
  scrollCol: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wineCard: {
    width: 350,
    height: 160,
    marginRight: 15,
    marginBottom: 25,
    flexDirection: 'row',
  },
  productScroll: {
    width: 40,
  },
  scrollContainer: {
    width: 130,
    borderWidth: 1,
    borderColor: colors.lightPurple,
    borderRadius: 5,
  },
  contentImg: {
    position: 'relative',
    marginRight: 0,
  },
  productImg: {
    width: 130,
    height: 200,
    resizeMode: 'cover',
  },
  wineInfo: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderLeftStyle: 'none',
    borderLeft: 'none',
    height: 160,
    width: 170,
    paddingLeft: 5,
    marginLeft: -1,
  },
  titleDescription: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
  yearDescription: {
    fontWeight: '500',
    fontSize: 10,
    marginTop: 20,
  },
  useDescription: {
    fontWeight: '400',
    fontSize: 10,
    marginTop: 10,
  },
  priceDescription: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 20,
  },
  echangeIcon: {
    justifyContent: 'center',
  },
  titleHome: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  iconHolder: {
    borderWidth: 1,
    borderColor: colors.lightPurple,
    justifyContent: 'center',
    width: 45,
    backgroundColor: colors.lightPurple,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default styles;
