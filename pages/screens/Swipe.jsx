import * as React from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Icon } from '@rneui/themed'
import { styles, theme } from '../../styles.js'
import { Info, Map, Tips } from './index.js'
import HomeWrapper from './HomeWrapper.jsx'
const renderScene = SceneMap({
  left: Tips,
  mid: HomeWrapper,
  right: Map
})

function Swipe() {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'left', title: 'Info' },
    { key: 'mid', title: 'Home' },
    { key: 'right', title: 'Map' }
  ])

  const renderTabBar = (props) => (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, idx) => (
        <Icon
          key={idx}
          name={getIconName(route.key)}
          size={24}
          color={idx === props.navigationState.index ? '#6200ee' : '#757575'}
          onPress={() => props.jumpTo(route.key)}
          style={styles.tabItem}
          type="material"
        />
      ))}
    </View>
  )

  const getIconName = (key) => {
    switch (key) {
      case 'left':
        return 'lightbulb'
      case 'mid':
        return 'home'
      case 'right':
        return 'location-pin'
      default:
        return ''
    }
  }

  return (
    <View style={styles.container1}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </View>
  )
}

export default Swipe
