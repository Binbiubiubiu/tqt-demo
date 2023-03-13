import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class MemoryWarning extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {
    this.isApiAvailable = Taro.canIUse("onMemoryWarning");
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  isApiAvailable: boolean = false;

  callback = (res) => {
    var levelString = "iOS 设备, 无 level 传入.";
    switch (res.level) {
      case 10:
        levelString = "Android 设备, level = TRIM_MEMORY_RUNNING_LOW";
        break;
      case 15:
        levelString = "Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL";
        break;
    }
    Taro.showModal({
      title: "收到内存不足告警",
      content: levelString,
      showCancel: false,
    });
  };

  onMemoryWarning = () => {
    if (this.isApiAvailable) {
      Taro.onMemoryWarning(this.callback);
    } else {
      Taro.showModal({
        title: "客户端版本过低",
        content:
          "my.onMemoryWarning() 和 my.offMemoryWarning() 需要 10.1.35 及以上版本",
        showCancel: false,
      });
    }
  };

  render() {
    return (
      <View className="page">
        <Button type="primary" onClick={this.onMemoryWarning}>
          开始监听内存不足告警
        </Button>
      </View>
    );
  }
}
