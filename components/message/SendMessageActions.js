import * as types from '../../actions'

import FBMessenger from '../facebook/FBMessenger'

export function sendMessage() {
  return (dispatch, getState) => {
    const resolveAssetSource = require('resolveAssetSource')
    const source = resolveAssetSource(getState().sendMessage.message.image)

    // const AssetRegistry = require('AssetRegistry')
    // const asset = AssetRegistry.getAssetByID(this.props.image);
    // asset.type

    FBMessenger.shareToMessenger(
        'drawable/' + source.uri,
        FBMessenger.IMAGE_JPEG,
        '{ "image" : "space cat" }',
    ).catch(error => console.warn(error))
  }
}
