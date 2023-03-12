import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Alert extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  alert = () => {
    Taro.showModal({
      title: "亲",
      content: "您本月的账单已出",
      confirmText: "我知道了",
      showCancel: false,
    }).then(() => {
      Taro.showModal({
        title: "用户点击了「我知道了」",
        showCancel: false,
      });
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">警告框 API</View>
        <View className="page-section">
          <View className="page-section-title">my.alert</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.alert}>
              显示警告框
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
