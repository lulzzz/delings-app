var _navigator; // we fill this up upon on first navigation.

export const setNavigator = navigator => {
  if (!_navigator) {
    _navigator = navigator
  }
}

export const goBack = () => {
  if (_navigator.getCurrentRoutes().length <= 2  ) {
     return false;
  }
  _navigator.pop();
  return true;
}

export const goForward = route => {
  _navigator.push(route)
}
