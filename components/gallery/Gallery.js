import { connect } from 'react-redux'

import {
  navigateToSelectedItem
} from './GalleryActions'

import GalleryView from './GalleryView'

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.gallery.categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleItemPress: item => {
      dispatch(navigateToSelectedItem(item))
    }
  }
}

const Gallery = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryView)

export default Gallery
