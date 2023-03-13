import { Component, PropsWithChildren } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./get-user-info.less";

export default class GetSystemInfo extends Component<PropsWithChildren> {
  state = {
    hasUserInfo: false,
    userInfo: {} as any,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getUserInfo = () => {
    Taro.login()
      .then(() => {
        Taro.getUserInfo().then((userInfo) => {
          console.log(`userInfo:`, userInfo);
          this.setState({
            userInfo,
            hasUserInfo: true,
          });
          Taro.showModal({
            title: JSON.stringify(userInfo), // alert 框的标题
            showCancel: false,
          });
        });
      })
      .catch((error) => {
        console.error("login", error);
      });
  };
  clear = () => {
    this.setState({
      hasUserInfo: false,
      userInfo: {},
    });
  };

  render() {
    const { hasUserInfo, userInfo } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            {hasUserInfo === false ? (
              <Text>点击 [获取] 可获取用户头像及昵称</Text>
            ) : null}

            {hasUserInfo === true ? (
              <>
                <View className="userinfo-avatar">
                  <Image
                    className="userinfo-avatar-img"
                    src={userInfo.avatar}
                  ></Image>
                </View>
                <View className="userinfo-nickname">{userInfo.nickName}</View>
              </>
            ) : null}
          </View>
          <View className="page-section-btns">
            <View onClick={this.getUserInfo}>获取</View>
            <View onClick={this.clear}>清空</View>
          </View>
        </View>
      </View>
    );
  }
}
