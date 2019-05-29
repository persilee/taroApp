import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {  AtList, AtListItem } from 'taro-ui'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    products: []
  }

  async componentWillMount(){
    const response = await Taro.request({
      url: `${API_WS}/products`
    })

    this.setState({
      products: response.data
    })
  }

  render () {
    const { products } = this.state

    return (
      <View className='index'>
         <AtList>
           {
             products.map(product =>
                <AtListItem
                  key={product.id}
                  arrow='right'
                  thumb={product.images[0].src}
                  title={product.name}
                  note={'￥' + product.price}
                />
              )
           }
         </AtList>
      </View>
    )
  }
}

