import React from 'react';

import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors.config';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  messageBox: {
    width: '100%',
    borderBottomColor: colors.lightPurple,
    borderBottomWidth: 1,
    borderTopColor: 'none',
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
    height: '50%',
    marginTop: 10,
    marginLeft: 10,
    width: '70%',
  },
  iconTo: {
    marginRight: 8,
  },
});

export default styles;
