import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Events extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {
    this.titleClick = Taro.on("titleClick", () => {
      console.log("title clicked");
      Taro.showModal({
        title: "亲",
        content: "您刚刚点击了标题",
        confirmText: "我知道了",
        showCancel: false,
      });
    });
  }

  componentWillUnmount() {
    this.titleClick.remove();
  }

  componentDidShow() {}

  componentDidHide() {}

  titleClick: any;

  render() {
    return (
      <View className="page">
        <View>点击标题，测试容器事件</View>
      </View>
    );
  }
}
