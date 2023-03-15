import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class UserCaptureScreen extends Component<PropsWithChildren> {
  state = {
    condition: false,
  };

  componentWillMount() {}

  componentDidMount() {
    Taro.onUserCaptureScreen(() => {
      Taro.showModal({
        content: "收到用户截图",
        showCancel: false,
      });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  offUserCaptureScreen = () => {
    Taro.offUserCaptureScreen(this.callback);
    this.setState({
      condition: false,
    });
  };
  onUserCaptureScreen = () => {
    Taro.onUserCaptureScreen(this.callback);
    this.setState({
      condition: true,
    });
  };
  callback = () => {
    Taro.showModal({
      content: "收到用户截图",
      showCancel: false,
    });
  };

  render() {
    const { condition } = this.state;
    return (
      <View className="page">
        <View className="page-description">用户截屏事件 API</View>
        <View className="page-section">
          <View className="page-section-title">my.onUserCaptureScreen</View>
          <View className="page-section-demo">
            <View>目前状态：{condition ? "已经开启监听" : "已经取消监听"}</View>
            {condition ? (
              <View>
                <Button type="primary" onClick={this.offUserCaptureScreen}>
                  取消监听屏幕事件
                </Button>
              </View>
            ) : (
              <View>
                <Button type="primary" onClick={this.onUserCaptureScreen}>
                  开启监听屏幕事件
                </Button>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
