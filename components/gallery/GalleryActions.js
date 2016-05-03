import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'
import routes from '../../routes'

function selectCategory(name, image) {
  return {
    type: types.SELECT_CATEGORY,
    name,
    image
  }
}

export function navigateToSelectedItem(item) {
  return (dispatch, getState) => {
    dispatch(selectCategory(item.name, item.image))
    dispatch(navigation.goForward(routes.SendMessage))
  }
}
