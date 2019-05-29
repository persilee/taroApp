import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

export default class ShopIndex extends Component {
  config = {
    navigationBarTitleText: 'TaroApp'
  }

  render() {
    return(
      <View className='page-demo'>
        ShopIndex
      </View>
    )
  }
}
