import { Component, PropsWithChildren } from "react";
import { View, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class GetSystemInfo extends Component<PropsWithChildren> {
  state = {
    src: "https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getImageInfo = () => {
    Taro.getImageInfo({
      src: this.state.src,
    }).then((res) => {
      Taro.showModal({
        content: JSON.stringify(res),
        showCancel: false,
      });
    });
  };

  render() {
    const { src } = this.state;
    return (
      <View className="page">
        <View className="page-description">获取图片信息 API</View>
        <View className="page-section">
          <View className="page-section-title">my.getImageInfo</View>
          <View className="page-section-demo">
            <Image src={src} />
            <Button type="primary" onClick={this.getImageInfo}>
              获取图片信息
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
