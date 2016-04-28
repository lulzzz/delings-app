import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  ToolbarAndroid,
} from 'react-native'

import NavigationBar from '../navigation/NavigationBar'
import GalleryItem from './GalleryItem'
import cssVar from '../../cssVar'

class GalleryView extends Component {

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  handleActionSelected(position) {
    switch (position) {
      case 0:
        //logOut
        break;
      default:
        //do nothing
    }
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
      <View style={styles.container}>
        <NavigationBar title='Delings'/>
        <ScrollView style={styles.list}>
          <View style={styles.header}>
            <Text style={styles.title}>Hva trenger du?</Text>
            <Text style={styles.description}>Si det med et bilde.</Text>
          </View>
          <View style={styles.grid}>
            {categories.map((item, i) => this.renderItem(item, i, width))}
          </View>
        </ScrollView>
      </View>
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
    flex: 1,
    backgroundColor: cssVar('windowBackground'),
  },
  list: {
    backgroundColor: 'white',
  },
  header: {
  },
  title: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    color: cssVar('textColorPrimary'),
    ...cssVar('fontTitle'),
  },
  description: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    color: cssVar('textColorPrimary'),
    ...cssVar('fontBody1'),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default GalleryView
