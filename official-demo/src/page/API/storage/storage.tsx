import { Component, PropsWithChildren } from "react";
import { View, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Storage extends Component<PropsWithChildren> {
  state = {
    key: "",
    data: "",
    keySync: "",
    dataSync: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  keyChange = (e) => {
    console.log(e);
    this.setState({
      key: e.detail.value,
    });
  };

  dataChange = (e) => {
    this.setState({
      data: e.detail.value,
    });
  };

  keyChangeSync = (e) => {
    console.log(e);
    this.setState({
      keySync: e.detail.value,
    });
  };

  dataChangeSync = (e) => {
    this.setState({
      dataSync: e.detail.value,
    });
  };

  getStorage = () => {
    var key = this.state.key;
    var data = this.state.data;
    console.log("data: ", this.state);
    if (key.length === 0) {
      this.setState({
        key: key,
        data: data,
      });

      Taro.showModal({
        title: "读取数据失败",
        content: "key 不能为空",
        showCancel: false,
      });
    } else {
      Taro.getStorage({
        key,
      }).then((res) => {
        Taro.showModal({
          title: "读取数据成功",
          content: "data: '" + JSON.stringify(res.data) + "'",
          showCancel: false,
        });
      });
      console.log("读取数据成功", Taro.getStorageSync(key));
    }
  };

  setStorage = () => {
    var key = this.state.key;
    var data = this.state.data;
    if (key.length === 0) {
      this.setState({
        key: key,
        data: data,
      });

      Taro.showModal({
        title: "保存数据失败",
        content: "key 不能为空",
        showCancel: false,
      });
    } else {
      let that = this;
      Taro.setStorage({
        key: key,
        data: data,
      }).then(() => {
        that.setState({
          key: key,
          data: data,
        });

        Taro.showModal({
          title: "存储数据成功",
          content: `${key}: ${data}`,
          showCancel: false,
        });
      });
    }
  };

  removeStorage = () => {
    let that = this;
    Taro.removeStorage({
      key: that.state.key,
    }).then(() => {
      that.setState({
        key: "",
        data: "",
      });

      Taro.showModal({
        title: "删除数据成功",
        content: "",
        showCancel: false,
      });
    });
  };
  clearStorage = () => {
    let that = this;
    Taro.clearStorage().then(() => {
      that.setState({
        key: "",
        data: "",
      });

      Taro.showModal({
        title: "清除数据成功",
        content: "",
        showCancel: false,
      });
    });
  };
  getStorageInfo = () => {
    Taro.getStorageInfo().then((res) => {
      Taro.showModal({
        content: JSON.stringify({
          keys: res.keys,
          currentSize: res.currentSize,
          limitSize: res.limitSize,
        }),
      });
    });
  };

  getStorageSync = () => {
    var key = this.state.keySync;
    var data = this.state.dataSync;
    console.log("data: ", this.state);
    if (key.length === 0) {
      this.setState({
        keySync: key,
        dataSync: data,
      });

      Taro.showModal({
        title: "同步读取数据失败",
        content: "key 不能为空",
        showCancel: false,
      });
    } else {
      let res = Taro.getStorageSync(key);
      if (!res.error) {
        Taro.showModal({
          title: "同步读取数据成功",
          content: "data: '" + JSON.stringify(res) + "'",
          showCancel: false,
        });
      }
    }
  };

  setStorageSync = () => {
    var key = this.state.keySync;
    var data = this.state.dataSync;
    if (key.length === 0) {
      this.setState({
        keySync: key,
        dataSync: data,
      });

      Taro.showModal({
        title: "同步保存数据失败",
        content: "key 不能为空",
        showCancel: false,
      });
    } else {
      Taro.setStorageSync(key, data);

      this.setState({
        keySync: key,
        dataSync: data,
      });

      Taro.showModal({
        title: "同步存储数据成功",
        content: `${key}: ${data}`,
        showCancel: false,
      });
    }
  };

  removeStorageSync = () => {
    Taro.removeStorageSync(this.state.keySync);

    this.setState({
      keySync: "",
      dataSync: "",
    });

    Taro.showModal({
      title: "同步删除数据成功",
      content: "",
      showCancel: false,
    });
  };
  clearStorageSync = () => {
    Taro.clearStorageSync();

    this.setState({
      keySync: "",
      dataSync: "",
    });

    Taro.showModal({
      title: "同步清除数据成功",
      content: "",
      showCancel: false,
    });
  };
  getStorageInfoSync = () => {
    let res = Taro.getStorageInfoSync();
    Taro.showModal({
      content: JSON.stringify({
        keys: res.keys,
        currentSize: res.currentSize,
        limitSize: res.limitSize,
      }),
      showCancel: false,
    });
  };

  render() {
    const { key, data, keySync, dataSync } = this.state;
    return (
      <View className="page">
        <View className="page-description">数据存储 API</View>
        <View className="page-section">
          <View className="page-section-demo">
            <Input
              type="text"
              placeholder="key"
              name="key"
              value={key}
              onInput={this.keyChange}
            ></Input>
            <Input
              type="text"
              placeholder="data"
              name="data"
              value={data}
              onInput={this.dataChange}
            ></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.setStorage}>存储数据</View>
            <View onClick={this.getStorage}>读取数据</View>
            <View onClick={this.removeStorage}>删除数据</View>
            <View onClick={this.clearStorage}>清除数据</View>
            <View onClick={this.getStorageInfo}>获取数据信息</View>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-demo">
            <Input
              type="text"
              placeholder="key"
              name="keySync"
              value={keySync}
              onInput={this.keyChangeSync}
            ></Input>
            <Input
              type="text"
              placeholder="data"
              name="dataSync"
              value={dataSync}
              onInput={this.dataChangeSync}
            ></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.setStorageSync}>同步存储数据</View>
            <View onClick={this.getStorageSync}>同步读取数据</View>
            <View onClick={this.removeStorageSync}>同步删除数据</View>
            <View onClick={this.clearStorageSync}>同步清除数据</View>
            <View onClick={this.getStorageInfoSync}>同步获取数据信息</View>
          </View>
        </View>
      </View>
    );
  }
}
