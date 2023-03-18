import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";

export default class RedirectExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View className="page-description">
          这是当前页，点击左上角返回回到上级菜单
        </View>
      </View>
    );
  }
}
