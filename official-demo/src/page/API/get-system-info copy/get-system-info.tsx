import { Component, PropsWithChildren } from "react";
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./get-system-info.less";

export default class GetSystemInfo extends Component<PropsWithChildren> {
  state = {
    systemInfo: {
      model: "",
      language: "",
      version: "",
      windowWidth: 0,
      windowHeight: 0,
      pixelRatio: 0,
    } as Taro.getSystemInfo.Result,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getSystemInfo = () => {
    Taro.getSystemInfo({}).then((res) => {
      this.setState({
        systemInfo: res,
      });
    });
  };
  getSystemInfoSync = () => {
    this.setState({
      systemInfo: Taro.getSystemInfoSync(),
    });
  };

  render() {
    const { systemInfo } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            <Text>手机型号</Text>
            <Input type="text" disabled value={systemInfo.model} />
          </View>
          <View className="page-section-demo">
            <Text>语言</Text>
            <Input type="text" disabled value={systemInfo.language} />
          </View>
          <View className="page-section-demo">
            <Text>版本</Text>
            <Input type="text" disabled value={systemInfo.version} />
          </View>
          <View className="page-section-demo">
            <Text>window宽度</Text>
            <Input type="text" disabled value={systemInfo.windowWidth + ""} />
          </View>
          <View className="page-section-demo">
            <Text>window高度</Text>
            <Input
              type="text"
              disabled
              value={systemInfo.windowHeight + ""}
            ></Input>
          </View>
          <View className="page-section-demo">
            <Text>DPI</Text>
            <Input
              type="text"
              disabled
              value={systemInfo.pixelRatio + ""}
            ></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.getSystemInfo}>获取手机系统信息</View>
            <View onClick={this.getSystemInfoSync}>同步获取手机系统信息</View>
          </View>
        </View>
      </View>
    );
  }
}
