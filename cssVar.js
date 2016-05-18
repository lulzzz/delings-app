import React, {
  //PixelRatio,
  StyleSheet,
} from 'react-native'

const customProps = {
  // colorPrimary: 'rgb(73,188,234)', // #49BCEA
  // colorPrimaryDark: 'rgb(73,188,234)',
  // colorPrimaryLight: 'rgb(73,188,234)',
  colorPrimary: 'rgb(34,41,67)', // #222943
  colorPrimaryDark: 'rgb(34,41,67)',
  colorPrimaryLight: 'rgb(34,41,67)',
  colorAccent: 'rgb(235,56,83)', // #EB3853
  colorAccentDark: 'rgb(235,56,83)',
  colorAccentLight: 'rgb(235,56,83)',
  // colorAccent: 'rgb(217,222,69)',
  // colorAccentDark: 'rgb(217,222,69)',
  // colorAccentLight: 'rgb(217,222,69)',
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
  fontWeightThin: '100',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '700',
  fontWeightBlack: '900',
}

const cssVarConfig = {
  ...customProps,
  divider: {
    backgroundColor: customProps.dividerColor,
    //height: 1 / PixelRatio.get(), // thinnest possible line
    height: StyleSheet.hairlineWidth,
  },
  dividerLight: {
    backgroundColor: customProps.dividerColorLight,
    //height: 1 / PixelRatio.get(), // thinnest possible line
    height: StyleSheet.hairlineWidth,
  },
  fontDisplay4: {
    fontSize: 112,
    fontWeight: customProps.fontWeightThin,
    color: customProps.textColorSecondary,
  },
  fontDisplay3: {
    fontSize: 56,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorSecondary,
  },
  fontDisplay2: {
    fontSize: 45,
    lineHeight: 48,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorSecondary,
  },
  fontDisplay1: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorSecondary,
  },
  fontHeadline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorPrimary,
  },
  fontTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: customProps.fontWeightMedium,
    color: customProps.textColorPrimary,
  },
  fontSubheading: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorPrimary,
  },
  fontBody2: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: customProps.fontWeightMedium,
    color: customProps.textColorPrimary,
  },
  fontBody1: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorPrimary,
  },
  fontCaption: {
    fontSize: 12,
    fontWeight: customProps.fontWeightRegular,
    color: customProps.textColorSecondary,
  },
  fontButton: {
    fontSize: 14,
    fontWeight: customProps.fontWeightMedium,
    color: customProps.textColorPrimary,
  },
}

const cssVar = key => {
  return cssVarConfig[key]
}

export default cssVar
