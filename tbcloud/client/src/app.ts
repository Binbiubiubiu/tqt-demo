import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import cloud from "@tbmp/mp-cloud-sdk"

import './app.less'

Taro.cloud = cloud

class App extends Component<PropsWithChildren> {

  componentDidMount () {
  }

  componentDidShow () {
    console.log(Taro)
    console.log(Taro.cloud)
  }

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
