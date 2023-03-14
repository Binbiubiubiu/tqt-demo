import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Toast extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showToastSuccess = () => {
    Taro.showToast({
      title: "操作成功",
      duration: 3000,
    }).then(() => {
      Taro.showModal({
        title: "toast 消失了",
        showCancel: false,
      });
    });
  };
  showToastFail = () => {
    Taro.showToast({
      icon: "error",
      title: "操作失败",
      duration: 3000,
    }).then(() => {
      Taro.showModal({
        title: "toast 消失了",
        showCancel: false,
      });
    });
  };
  showToastException = () => {
    Taro.showToast({
      icon: "error",
      title: "网络异常",
      duration: 3000,
    }).then(() => {
      Taro.showModal({
        title: "toast 消失了",
        showCancel: false,
      });
    });
  };
  showToastNone = () => {
    Taro.showToast({
      icon: "none",
      title: "提醒",
      duration: 3000,
    }).then(() => {
      Taro.showModal({
        title: "toast 消失了",
        showCancel: false,
      });
    });
  };
  hideToast = () => {
    Taro.hideToast();
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">Toast API</View>
        <View className="page-section">
          <View className="page-section-title">my.showToast</View>
          <View className="page-section-btns">
            <View onClick={this.showToastSuccess}>显示提示</View>
            <View onClick={this.showToastFail}>显示 fail 提示</View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.showToastException}>显示 exception 提示</View>
            <View onClick={this.showToastNone}>显示 none 弱提示</View>
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">my.hideToast</View>
          <View className="page-section-btns">
            <View onClick={this.hideToast}>隐藏弱提示</View>
          </View>
        </View>
      </View>
    );
  }
}
