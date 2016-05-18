import React, {
  PropTypes,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'

import Toolbar from '../toolbar/Toolbar'
import GalleryItem from './GalleryItem'
import cssVar from '../../cssVar'

const GalleryView = props => {
  const { height, width } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Toolbar title={props.route.title} />
      <ScrollView style={styles.list}>
        <View style={styles.header}>
          <Text style={styles.title}>Hva trenger du?</Text>
          <Text style={styles.description}>Si det med et bilde.</Text>
        </View>
        <View style={styles.grid}>
          {props.categories.map((item, i) => (
            <GalleryItem key={i}
                handleItemPress={() => props.handleItemPress(item)}
                width={0.5 * width}
                {...item}
              />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: 'white'
  },
  header: {
  },
  title: {
    ...cssVar('fontTitle'),
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  description: {
    ...cssVar('fontBody1'),
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

GalleryView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired
  }).isRequired).isRequired,
  handleItemPress: PropTypes.func.isRequired,
}

export default GalleryView
