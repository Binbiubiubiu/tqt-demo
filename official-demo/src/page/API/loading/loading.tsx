import { Component, PropsWithChildren } from "react";
import { View, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class LoadingExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showLoading = () => {
    Taro.showLoading({
      title: "加载中...",
      delay: 1000,
    });
    setTimeout(() => {
      Taro.hideLoading();
    }, 5000);
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">
            显示 loading 后，会覆盖整个h5页面，页面元素不能交互。
          </View>
          <View className="page-section-btns">
            <View onClick={this.showLoading}>显示加载提示</View>
          </View>
        </View>
      </View>
    );
  }
}
