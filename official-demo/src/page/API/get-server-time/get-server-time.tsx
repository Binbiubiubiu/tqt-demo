import { Component, PropsWithChildren } from "react";
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class GetServerTime extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getServerTime = async () => {
    const res = await Taro.getServerTime({});
    console.log(res);
    Taro.showModal({
      content: res.time + "",
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-btns">
            <View onClick={this.getServerTime}>获取服务器时间</View>
          </View>
        </View>
      </View>
    );
  }
}
