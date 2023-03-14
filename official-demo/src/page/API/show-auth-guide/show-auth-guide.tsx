import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./show-auth-guide.less";

export default class ShowAuthGuide extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showAuthGuide = () => {
    Taro.showAuthGuide({
      bizType: "AppletPG",
      authType: "ADDRESSBOOK",
    })
      .then((res) => {
        //shown为true时表示会显示权限引导弹窗，为false时表示用户已经授权
        Taro.showModal({
          content: "调用成功：" + JSON.stringify(res),
          showCancel: false,
        });
      })
      .catch((error) => {
        Taro.showModal({
          content: "调用失败：" + JSON.stringify(error),
          showCancel: false,
        });
      });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">权限引导 API</View>
        <View className="page-section">
          <View className="page-section-title">my.showAuthGuide</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.showAuthGuide}>
              权限引导
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
