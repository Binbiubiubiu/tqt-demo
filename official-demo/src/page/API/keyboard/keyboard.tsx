import { Component, PropsWithChildren } from "react";
import { View, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Keyboard extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  bindHideKeyboard = (e) => {
    if (e.detail.value === "123") {
      // 收起键盘
      Taro.hideKeyboard();
    }
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">输入框</View>
        <View className="page-section">
          <View className="form-row">
            <View className="form-row-label">密码键盘</View>
            <View className="form-row-content">
              <Input
                className="input"
                password
                type="text"
                onInput={this.bindHideKeyboard}
                placeholder="输入 123 自动收起键盘"
              />
            </View>
          </View>

          <View className="form-row">
            <View className="form-row-label">数字键盘</View>
            <View className="form-row-content">
              <Input
                className="input"
                type="digit"
                onInput={this.bindHideKeyboard}
                placeholder="输入 123 自动收起键盘"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
