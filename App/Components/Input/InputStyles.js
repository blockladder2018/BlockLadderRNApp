import { StyleSheet } from 'react-native';

import {
  ApplicationStyles,
  Colors,
  Debug,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  labelViewStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  labelTextStyle: {
    color: Colors.black,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

  validationTextStyle: {
    color: Colors.red,
    fontSize: Fonts.size.h4,
  },

  inputOnBlurStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    color: Colors.black,
    backgroundColor: Colors.white,
    padding: 10,
    fontSize: Fonts.size.h3,
  },

  inputOnFocusStyle: {
    ...Debug.debugBorder('red'),
    flexDirection: 'row',
    alignSelf: 'stretch',
    color: Colors.black,
    backgroundColor: Colors.white,
    padding: 10,
    fontSize: Fonts.size.h3,
  },

  inputWithValidationStyle: {
    borderColor: Colors.red,
    borderWidth: 1,
  },

});
