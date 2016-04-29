import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'

function selectCategory(name, image) {
  return {
    type: types.SELECT_CATEGORY,
    name,
    image
  }
}

export function navigateToSelectedItem(item, navigator) {
  return (dispatch, getState) => {
    dispatch(selectCategory(item.name, item.image))
    navigation.goForward({ name: 'SendMessage', image: item.image })
  }
}
