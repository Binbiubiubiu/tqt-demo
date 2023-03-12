import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./get-auth-code.less";

export default class GetAuthCode extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getAuthCode = async () => {
    const res = await Taro.authorize({
      scopes: "scope.userInfo",
    });
    // const res = await Taro.login();
    console.log(res);
    Taro.showModal({
      content: JSON.stringify(res),
      showCancel: false,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View>
            请不要一进入商家应用就弹框授权，建议先了解商家应用的服务内容
          </View>
          <Button type="primary" onClick={this.getAuthCode}>
            获取授权码
          </Button>
        </View>
      </View>
    );
  }
}
