import * as types from '../../actions'

export function setNavigator(navigator) {
  return {
    type: types.SET_NAVIGATOR,
    navigator
  }
}

export function goForward(route) {
  return (dispatch, getState) => {
    getState().navigation.navigator.push(route)
  }
}

export function goBack() {
  return (dispatch, getState) => {
    const navigator = getState().navigation.navigator
    if (navigator.getCurrentRoutes().length <= 2  ) {
       return false;
    }
    navigator.pop();
    return true;
  }
}
