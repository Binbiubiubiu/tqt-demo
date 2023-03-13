import { Component, PropsWithChildren } from "react";
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class ImageExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  chooseImage = () => {
    Taro.chooseImage({
      sourceType: ["camera", "album"],
      count: 2,
    })
      .then((res) => {
        Taro.showModal({
          content: JSON.stringify(res),
          showCancel: false,
        });
      })
      .catch(() => {
        Taro.showToast({
          title: "fail", // 文字内容
        });
      });
  };
  previewImage() {
    Taro.previewImage({
      current: "https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg",
      urls: [
        "https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg",
        "https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg",
        "https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg",
      ],
    });
  }
  saveImage = () => {
    Taro.saveImage({
      url: "https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg",
      showActionSheet: true,
    }).then((res) => {
      console.log(res);
      Taro.showModal({
        title: "保存成功",
        showCancel: false,
      });
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-btns">
            <View onClick={this.chooseImage}>选择照片</View>
            <View onClick={this.previewImage}>预览照片</View>
            <View onClick={this.saveImage}>保存照片</View>
          </View>
        </View>
      </View>
    );
  }
}
