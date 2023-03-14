import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class ScanCode extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  scan = () => {
    Taro.scanCode({
      scanType: ["qrCode"],
      success: (res) => {
        console.log(res);
        Taro.showModal({ title: res.result });
      },
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <Button type="primary" onClick={this.scan}>
            扫码
          </Button>
        </View>
      </View>
    );
  }
}
