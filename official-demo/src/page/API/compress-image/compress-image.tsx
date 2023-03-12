import { Component, PropsWithChildren } from "react";
import { View, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class CompressImage extends Component<PropsWithChildren> {
  state = {
    compressedSrc: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  selectImage = async () => {
    const res = await Taro.chooseImage({
      count: 1,
    });
    const data = await Taro.compressImage({
      src: res.tempFilePaths[0],
      compressLevel: 1,
    });

    this.setState({
      compressedSrc: data.tempFilePath,
    });
  };

  render() {
    const { compressedSrc } = this.state;
    console.log(compressedSrc);
    return (
      <View className="page">
        <View className="page-description">压缩图片 API</View>
        <View className="page-section">
          <View className="page-section-title">my.compressImage</View>
          <View className="page-section-demo">
            <Button
              type="primary"
              onClick={this.selectImage}
              hover-className="defaultTap"
            >
              选择图片
            </Button>
            (真机调试)
            <Image src={compressedSrc} mode="aspectFit" />
          </View>
        </View>
      </View>
    );
  }
}
