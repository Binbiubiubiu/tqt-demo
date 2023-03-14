import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class PullDownRefresh extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPullDownRefresh() {
    console.log("onPullDownRefresh", new Date());
  }
  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh({
      complete(res) {
        console.log(res, new Date());
      },
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">下滑页面即可刷新</View>
          <View className="page-section-btns">
            <View onClick={this.stopPullDownRefresh}>停止刷新</View>
          </View>
        </View>
      </View>
    );
  }
}
