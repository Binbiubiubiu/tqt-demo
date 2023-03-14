import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class UploadFile extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  uploadFile = async () => {
    const res = await Taro.chooseImage({
      count: 1,
    });
    const path = res.tempFilePaths[0];
    console.log(path);
    Taro.uploadFile({
      url: "http://httpbin.org/post",
      fileType: "image",
      name: "file",
      filePath: path,
    })
      .then(() => {
        Taro.showModal({ title: "上传成功", showCancel: false });
      })
      .catch(() => {
        Taro.showModal({ title: "上传失败", showCancel: false });
      });
  };

  render() {
    return (
      <View className="page">
        <Button type="primary" onClick={this.uploadFile}>
          上传图片
        </Button>
      </View>
    );
  }
}
