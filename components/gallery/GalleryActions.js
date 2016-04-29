import {
  SELECT_CATEGORY,
} from '../../actions'

import Routes from '../../routes'

function selectCategory(name, image) {
  return {
    type: SELECT_CATEGORY,
    name,
    image
  }
}

export function navigateToSelectedItem(item, navigator) {
  return (dispatch, getState) => {
    dispatch(selectCategory(item.name, item.image))
    navigator.push({ name: 'SendMessage', image: item.image })
  }
}
