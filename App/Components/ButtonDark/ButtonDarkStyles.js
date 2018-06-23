import { StyleSheet } from 'react-native';

import {
  ApplicationStyles,
  Colors,
  Metrics,
  Fonts,
} from 'App/Themes';

export default StyleSheet.create({
  ...ApplicationStyles,

  containerStyle: {
    height: 50,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: Colors.amber,
  },

  rowStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  labelStyle: {
    color: Colors.black,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
  },

});
