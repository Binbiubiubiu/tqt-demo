import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./get-network-type.less";

export default class GetNetworkType extends Component<PropsWithChildren> {
  state = {
    hasNetworkType: false,
    networkType: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = (res) => {
    console.log("onNetworkChange", res);
    this.setState({
      hasNetworkType: true,
      networkType: res.networkType,
    });
  };

  getNetworkType = () => {
    Taro.getNetworkType({}).then((res) => {
      this.setState({
        hasNetworkType: true,
        networkType: res.networkType,
      });
    });
  };
  clear = () => {
    this.setState({
      hasNetworkType: false,
      networkType: "",
    });
  };

  render() {
    const { hasNetworkType, networkType } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            <View className="page-body-title">网络状态</View>

            {hasNetworkType === false ? (
              <>
                <Text className="page-body-Text">未获取</Text>
                <Text className="page-body-Text">点击按钮可获取网络状态</Text>
              </>
            ) : null}
            {hasNetworkType === true ? (
              <Text className="page-body-Text-network-type">{networkType}</Text>
            ) : null}
          </View>

          <View className="page-section-btns">
            <View onClick={this.getNetworkType}>获取手机网络状态</View>
            <View onClick={this.clear}>清空</View>
          </View>
        </View>
      </View>
    );
  }
}
