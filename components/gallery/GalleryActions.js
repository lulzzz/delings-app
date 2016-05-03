import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'
import routes from '../../routes'

function selectCategory(category, image) {
  return {
    type: types.SELECT_CATEGORY,
    category,
    image
  }
}

export function navigateToSelectedItem(item) {
  return (dispatch, getState) => {
    dispatch(selectCategory(item.name, item.image))
    dispatch(navigation.goForward(routes.SendMessage))
  }
}
