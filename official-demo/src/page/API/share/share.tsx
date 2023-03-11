import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";

export default class Share extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage() {
    return {
      title: "分享 View 组件",
      desc: "View 组件很通用",
      path: "page/component/view/view",
    };
  }

  render() {
    return (
      <View className="page">
        <View className="page-description">点击右上角开始自定义分享</View>
      </View>
    );
  }
}
