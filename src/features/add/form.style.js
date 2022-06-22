import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../themes/colors.config';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  addContainer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  accountImg: {
    height: 80,
    width: 80,
    borderColor: colors.underPurple,
    borderRadius: 40,
    borderWidth: 2,
    marginTop: 7,
    marginBottom: 7,
  },
  divider: {
    backgroundColor: colors.lightPurple,
    paddingBottom: 3,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
    height: 4,
  },
  secondSection: {
    width: '100%',
    height: 520,
    marginTop: 15,
  },
  optionContainer: {
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 15,
    color: colors.lightPurple,
    marginLeft: 40,
  },
  textInput: {
    marginTop: 10,
    height: 20,
    width: 300,
    borderBottomColor: colors.lightPurple,
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
  descriptionInput: {
    marginTop: 10,
    height: 15,
    width: 300,
    borderBottomColor: colors.lightPurple,
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
  selectContainer: {
    height: 70,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  dropdownButton: {
    backgroundColor: 'white',
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdownText: {
    fontWeight: '500',
    fontSize: 20,
    color: colors.underPurple,
  },
  titleState: {
    fontSize: 15,
    color: colors.lightPurple,
    marginBottom: 10,
  },
  switchTextCtn: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  switchContainer: {
    width: '80%',
    flexDirection: 'row',
    marginRight: 40,
    marginLeft: 30,
    marginTop: 20,
  },
  switchText: {
    fontSize: 12,
    fontWeight: '400',
    justifyContent: 'center',
    color: colors.lightPurple,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: colors.lightPurple,
    alignSelf: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },

  ///

  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: colors.underPurple, fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width: 40, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightPurple,
  },
  dropdown1BtnTxtStyle: {color: colors.underPurple, textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: colors.underPurple, textAlign: 'left'},
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: colors.underPurple,
  },
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default styles;
