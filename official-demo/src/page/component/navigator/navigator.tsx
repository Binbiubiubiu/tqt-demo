import { Component, PropsWithChildren } from "react";
import { View, Navigator } from "@tarojs/components";

import "./navigator.less";

export default class NavigatorExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View className="page-description">导航栏</View>
        <Navigator
          open-type="navigate"
          url="./navigate"
          hover-className="navigator-hover"
        >
          跳转到新页面
        </Navigator>
        <Navigator
          open-type="redirect"
          url="./redirect"
          hover-className="navigator-hover"
        >
          在当前页打开
        </Navigator>
        <Navigator
          open-type="switchTab"
          url="/page/tabBar/API/index"
          hover-className="navigator-hover"
        >
          跳转到另外一个 Tab - API
        </Navigator>
        <Navigator
          open-type="reLaunch"
          url="/page/tabBar/component/index"
          hover-className="navigator-hover"
        >
          重新打开
        </Navigator>
        <Navigator open-type="navigateBack" hover-className="navigator-hover">
          返回上一页面
        </Navigator>
      </View>
    );
  }
}
