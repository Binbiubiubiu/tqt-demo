import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class GetSystemInfo extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  makePhoneCall = () => {
    Taro.makePhoneCall({ phoneNumber: "95888" });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">my.makePhoneCall</View>
          <View className="page-section-btns">
            <View onClick={this.makePhoneCall}>打电话</View>
          </View>
        </View>
      </View>
    );
  }
}
