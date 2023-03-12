import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Confirm extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  comfirm = async () => {
    const result = await Taro.showModal({
      title: "温馨提示",
      content: "您是否想查询快递单号：\n1234567890",
      confirmText: "马上查询",
      cancelText: "暂不需要",
    });
    Taro.showModal({
      title: `${result.confirm}`,
      showCancel: false,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">确认框 API</View>
        <View className="page-section">
          <View className="page-section-title">my.confirm</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.comfirm}>
              显示确认框
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
