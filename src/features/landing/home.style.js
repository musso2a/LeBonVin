import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const styles = StyleSheet.create({
  // categorie

  safeArea: {
    backgroundColor: colors.lightPurple,
    flex: 0,
  },

  main: {
    paddingTop: 10,
    backgroundColor: '#fff',
    height: '100%',
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
  colContainer: {
    width: '100%',
    height: 500,
    padding: 5,
    //borderColor: colors.red,
    //borderWidth: 1,
    marginLeft: 20,
  },
  longWineCard: {
    width: 190,
    height: 160,
    marginRight: 15,
    marginBottom: 25,
    //borderColor: 'blue',
    borderWidth: 3,
  },
  scrollCol: {
    height: '100%',
    //borderColor: colors.green,
    //borderWidth: 1,
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
    //borderWidth: 1,
    //borderColor: 'black',
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
  iconTo: {
    justifySelf: 'flex-end',
    size: 40,
    color: 'white',
  },

  catScrollview: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  content_view_offers: {
    position: 'relative',
    marginRight: 15,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content_view_offers_img: {
    width: 120,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: colors.lightPurple,
    borderWidth: 1,
  },
  longContentViewOffersImg: {
    width: 180,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 5,
    borderColor: colors.lightPurple,
    borderWidth: 1,
  },
  content_view_offers_txt: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
  },

  // big card

  pub_view: {
    paddingBottom: 8,
  },
  pub_img: {
    height: 150,
    width: 300,
    marginRight: 15,
    borderRadius: 6,
  },
});

export default styles;
