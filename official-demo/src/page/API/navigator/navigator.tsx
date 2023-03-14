import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./navigator.less";

export default class Navigator extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  navigateTo = () => {
    Taro.navigateTo({ url: "../get-user-info/get-user-info" });
  };
  navigateBack = () => {
    Taro.navigateBack();
  };
  redirectTo = () => {
    Taro.redirectTo({ url: "../get-user-info/get-user-info" });
  };
  navigateToMiniProgram = () => {
    if (Taro.canIUse("navigateToMiniProgram")) {
      Taro.navigateToMiniProgram({
        appId: "2017072607907880",
        extraData: {
          data1: "test",
        },
      })
        .then((res) => {
          console.log(JSON.stringify(res));
        })
        .catch((res) => {
          console.log(JSON.stringify(res));
        });
    }
  };
  navigateBackMiniProgram = () => {
    if (Taro.canIUse("navigateBackMiniProgram")) {
      Taro.navigateBackMiniProgram({
        extraData: {
          data1: "test",
        },
      })
        .then((res) => {
          console.log(JSON.stringify(res));
        })
        .catch((res) => {
          console.log(JSON.stringify(res));
        });
    }
  };
  switchTab = () => {
    Taro.switchTab({
      url: "/page/tabBar/component/index",
    }).then(() => {
      Taro.showToast({
        title: "成功",
        icon: "success",
        duration: 4000,
      });
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <Button type="primary" onClick={this.navigateTo}>
            跳转新页面
          </Button>
          <Button type="primary" onClick={this.navigateBack}>
            返回上一页
          </Button>
          <Button type="primary" onClick={this.redirectTo}>
            在当前页面打开 - 获取用户信息
          </Button>
          <Button type="primary" onClick={this.switchTab}>
            跳转 Tab - 组件
          </Button>
          <View className="page-description">
            本Demo不具备商家应用跳转功能，仅展示 API
            的使用，具体接入请参考商家应用官方文档 API 的商家应用相互跳转部分。
          </View>
          <Button type="primary" onClick={this.navigateToMiniProgram}>
            跳转到商家应用
          </Button>
          <Button type="primary" onClick={this.navigateBackMiniProgram}>
            跳回商家应用
          </Button>
        </View>
      </View>
    );
  }
}
