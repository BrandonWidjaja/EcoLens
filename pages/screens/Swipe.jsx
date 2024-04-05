import * as React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

import { Home, Info, Map } from './index.js'

const renderScene = SceneMap({
  left: Info,
  mid: Home,
  right: Map
})

export default function Swipe() {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'left', title: 'Info' },
    { key: 'mid', title: 'Home' },
    { key: 'right', title: 'Map' }
  ])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}
