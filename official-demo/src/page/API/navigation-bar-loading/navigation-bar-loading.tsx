import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class NavigationBarLoading extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showNavigationBarLoading = () => {
    Taro.showNavigationBarLoading();
  };
  hideNavigationBarLoading = () => {
    Taro.hideNavigationBarLoading();
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <Button type="primary" onClick={this.showNavigationBarLoading}>
            显示加载动画
          </Button>
          <Button onClick={this.hideNavigationBarLoading}>隐藏加载动画</Button>
        </View>
      </View>
    );
  }
}
