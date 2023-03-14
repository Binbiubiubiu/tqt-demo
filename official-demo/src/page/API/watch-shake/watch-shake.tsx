import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class WatchShake extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  watchShake = () => {
    Taro.watchShake().then((res) => {
      console.log("动起来了");
      Taro.showModal({ title: "动起来了 o.o", showCancel: false });
    });
  };
  render() {
    return (
      <View className="page">
        <Button type="primary" onClick={this.watchShake}>
          绑定摇一摇，点击 Shake 按钮看效果
        </Button>
      </View>
    );
  }
}
