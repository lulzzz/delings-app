import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageEditor,
} from 'react-native'

import GalleryItem from './GalleryItem'

class GalleryView extends Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(itemProps, id, windowWidth) {
    return (
      <GalleryItem key={id}
          handleItemPress={() => this.props.navigator.push({ name: 'SendMessage', image: itemProps.image })}
          width={0.5 * windowWidth}
          {...itemProps}/>
    )
  }

  render() {
    const { height, width } = Dimensions.get('window');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Hva trenger du?</Text>
          <Text style={styles.subheading}>Si det med et bilde.</Text>
        </View>
        <View style={styles.categories}>
          {categories.map((item, i) => this.renderItem(item, i, width))}
        </View>
      </ScrollView>
    )
  }
}

const categories = [
  {
    name: 'Vintersport',
    image: require('./img/winter-sports.jpg'),
  },
  {
    name: 'Hagearbeid',
    image: require('./img/gardening.jpg'),
  },
  {
    name: 'Baking og matlaging',
    image: require('./img/baking-cooking.jpg'),
  },
  {
    name: 'Oppussing',
    image: require('./img/home-improvement.jpg'),
  },
]

const styles = StyleSheet.create({
  container: {
  },
  header: {
  },
  heading: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
  subheading: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default GalleryView
