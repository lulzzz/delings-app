import React, {
  StyleSheet,
  PixelRatio,
} from 'react-native'

const cssVarConfig = {
  colorPrimary: 'rgb(73,188,234)',
  colorPrimaryDark: 'rgb(73,188,234)',
  colorPrimaryLight: 'rgb(73,188,234)',
  // colorPrimary: 'rgb(34,41,67)',
  // colorPrimaryDark: '',
  // colorPrimaryLight: '',
  colorAccent: 'rgb(235,56,83)',
  colorAccentDark: 'rgb(235,56,83)',
  colorAccentLight: 'rgb(235,56,83)',
  // colorAccent: 'rgb(217,222,69)',
  // colorAccentDark: '',
  // colorAccentLight: '',
  textColorPrimary: 'rgba(0,0,0,0.87)',
  textColorPrimaryLight: 'rgb(255,255,255)',
  textColorSecondary: 'rgba(0,0,0,0.54)',
  textColorSecondaryLight: 'rgba(255,255,255,0.70)',
  textColorDisabled: 'rgba(0,0,0,0.38)',
  textColorDisabledLight: 'rgba(255,255,255,0.50)',
  iconColor: 'rgba(0,0,0,0.38)',
  iconColorLight: 'rgba(255,255,255,0.50)',
  dividerColor: 'rgba(0,0,0,0.12)',
  dividerColorLight: 'rgba(255,255,255,0.12)',
  windowBackground: '#FAFAFA',
  windowBackgroundLight: '#303030',
  divider: {
    backgroundColor: 'rgba(0,0,0,0.12)',
    //height: 1 / PixelRatio.get(), // thinnest possible line
    height: StyleSheet.hairlineWidth,
  },
  dividerLight: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    //height: 1 / PixelRatio.get(), // thinnest possible line
    height: StyleSheet.hairlineWidth,
  },
}

const cssVar = key => {
  return cssVarConfig[key]
}

export default cssVar
