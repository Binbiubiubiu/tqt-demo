import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class DownloadFile extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  download = async () => {
    Taro.downloadFile({
      url: "https://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg",
    })
      .then((res) => {
        console.log(res);
        console.log(res.tempFilePath);
        Taro.previewImage({
          urls: [res.tempFilePath],
        });
      })
      .catch((res) => {
        Taro.showModal({
          content: res.errorMessage || res.error,
          showCancel: false,
        });
      });
  };

  render() {
    return (
      <View className="container">
        <Button onClick={this.download}>下载图片并显示</Button>
        (真机调试)
      </View>
    );
  }
}
