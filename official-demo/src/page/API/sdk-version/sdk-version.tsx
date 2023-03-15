import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class SdkVersion extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getSDKVersion = () => {
    Taro.showModal({
      content: Taro.SDKVersion,
      showCancel: false,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">获取基础库版本号 API</View>
        <View className="page-section">
          <View className="page-section-title">my.SDKVersion</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.getSDKVersion}>
              获取基础库版本号
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
