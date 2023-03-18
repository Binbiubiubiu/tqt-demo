import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";

export default class ReLaunchExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  index = () => {
    Taro.reLaunch({
      url: "/page/tabBar/component/index",
    });
  };

  render() {
    return (
      <View className="page">
        <Button onClick={this.index}>点击回到首页</Button>
      </View>
    );
  }
}
