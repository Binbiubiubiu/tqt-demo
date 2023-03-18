import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";

export default class NavigateExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View
          className="page-description"
          style="text-align: center; margin-top: 200px;"
        >
          我是一个新的页面
        </View>
      </View>
    );
  }
}
