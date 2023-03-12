import { Component, PropsWithChildren } from "react";
import { View, Button, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./file.less";

export default class File extends Component<PropsWithChildren> {
  state = {
    tempFilePath: "",
    savedFilePath: "",
  };

  componentWillMount() {}

  componentDidMount() {
    (async () => {
      const res = await Taro.getStorage({
        key: "savedFilePath", // 缓存数据的 key
      });
      this.setState({
        savedFilePath: res.data ? res.data : "",
      });
    })();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  chooseImage = async () => {
    const res = await Taro.chooseImage({
      count: 1,
    });
    console.log("chooseImage", res);
    this.setState({
      tempFilePath: res.tempFilePaths[0],
    });
  };
  saveFile = async () => {
    if (this.state.tempFilePath.length > 0) {
      const that = this;
      console.log(this.state.tempFilePath);
      const res: any = await Taro.saveFile({
        tempFilePath: this.state.tempFilePath,
      });
      console.log("saveFile", res);
      that.setState({
        savedFilePath: res.savedFilePath,
      });
      Taro.setStorage({ key: "savedFilePath", data: res.savedFilePath });
      Taro.showModal({
        title: "保存成功", // alert 框的标题
        content: `下次进入应用时，此文件仍可用:${JSON.stringify(res)}`,
        showCancel: false,
      });
    }
  };
  getFileInfo = async () => {
    const res = await Taro.getFileInfo({
      filePath: this.state.tempFilePath,
      digestAlgorithm: "sha1",
      fail(result) {
        Taro.showModal({
          content: `eerr:${JSON.stringify(result)}`,
          showCancel: false,
        });
      },
    });
    Taro.showModal({
      title: "文件信息",
      content: JSON.stringify(res),
      showCancel: true,
    });
    console.log(JSON.stringify(res));
  };
  getSavedFileInfo = async () => {
    const res = await Taro.getSavedFileInfo({
      filePath: this.state.savedFilePath,
    });
    Taro.showModal({
      title: "文件信息",
      content: JSON.stringify(res),
      showCancel: false,
    });
    console.log(JSON.stringify(res));
  };

  getSavedFileList = async () => {
    const res = await Taro.getSavedFileList({});
    Taro.showModal({
      title: "已保存文件列表",
      content: JSON.stringify(res),
      showCancel: false,
    });
    console.log(JSON.stringify(res));
  };

  removeSavedFile = async () => {
    const res = await Taro.getSavedFileList({});
    let res2 = await Taro.removeSavedFile({
      filePath: res.fileList[0].filePath,
    });
    Taro.showModal({
      title: "移除文件成功",
      content: JSON.stringify(res2),
      showCancel: false,
    });
    console.log("remove success");
  };
  openDocument = async () => {
    Taro.showLoading({
      title: "文件下载中...",
      delay: 0,
    });
    //首先download file
    const { tempFilePath } = await Taro.downloadFile({
      url: "https://gw.alipayobjects.com/os/basement_prod/1ce3efc7-a8e0-4111-83e5-4cc8de73170e.pdf",
    });

    if (Taro.canIUse("openDocument")) {
      Taro.hideLoading();
      Taro.openDocument({
        filePath: tempFilePath,
        fileType: "pdf",
        success: () => {
          console.log("open document success");
        },
      });
    } else {
      Taro.showModal({
        title: "客户端版本过低",
        content: "my.openDocument() 需要 10.1.50 及以上版本",
        showCancel: false,
      });
    }
  };
  clear = () => {
    Taro.setStorage({ key: "savedFilePath", data: "" });
    this.setState({
      tempFilePath: "",
      savedFilePath: "",
    });
  };

  render() {
    const { tempFilePath, savedFilePath } = this.state;
    return (
      <View className="page">
        <View className="page-description">文件API</View>
        <View className="page-section">
          <View className="page-section-title">选择文件</View>

          {tempFilePath != "" ? (
            <Image src={tempFilePath} className="image"></Image>
          ) : null}

          {tempFilePath === "" && savedFilePath != "" ? (
            <Image src={savedFilePath} className="image"></Image>
          ) : null}
          {tempFilePath === "" && savedFilePath === "" ? (
            <View className="image-plus" onClick={this.chooseImage}>
              <View className="image-plus-horizontal">
                <View className="image-plus-vertical"></View>
              </View>
            </View>
          ) : null}

          <View className="page-section-demo">
            <Button
              className="page-body-Button"
              type="primary"
              onClick={this.saveFile}
            >
              保存文件
            </Button>
            <Button
              className="page-body-Button"
              type="primary"
              onClick={this.getFileInfo}
            >
              获取文件信息
            </Button>
            <Button
              className="page-body-Button"
              type="primary"
              onClick={this.getSavedFileInfo}
            >
              获取保存的文件信息
            </Button>
            <Button
              className="page-body-Button"
              type="primary"
              onClick={this.getSavedFileList}
            >
              获取保存的文件列表
            </Button>
            <Button
              className="page-body-Button"
              type="primary"
              onClick={this.removeSavedFile}
            >
              移除保存的文件
            </Button>
            <Button className="page-body-Button" onClick={this.clear}>
              删除文件
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
