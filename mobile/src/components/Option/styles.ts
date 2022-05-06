import { StyleSheet, Dimensions } from 'react-native'
import { theme } from '../../theme'

let deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    width: deviceWidth/3-deviceWidth/16,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme.colors.surface_secondary,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  }
});
