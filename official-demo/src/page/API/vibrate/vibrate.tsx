import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Vibrate extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  vibrate = () => {
    Taro.vibrate({
      success: () => {},
    }).then(() => {
      Taro.showModal({ title: "振动起来了", showCancel: false });
    });
  };
  vibrateLong = () => {
    if (Taro.canIUse("vibrateLong")) {
      Taro.vibrateLong();
    } else {
      Taro.showModal({
        title: "客户端版本过低",
        content: "my.vibrateLong() 需要 10.1.35 及以上版本",
        showCancel: false,
      });
    }
  };
  vibrateShort = () => {
    if (Taro.canIUse("vibrateShort")) {
      Taro.vibrateShort();
    } else {
      Taro.showModal({
        title: "客户端版本过低",
        content: "my.vibrateShort() 需要 10.1.35 及以上版本",
        showCancel: false,
      });
    }
  };
  render() {
    return (
      <View className="page">
        <Button type="primary" onClick={this.vibrate}>
          开始振动
        </Button>

        <Button type="primary" onClick={this.vibrateLong}>
          长时间振动 (400ms)
        </Button>

        <Button type="primary" onClick={this.vibrateShort}>
          短时间振动 (40ms)
        </Button>
      </View>
    );
  }
}
