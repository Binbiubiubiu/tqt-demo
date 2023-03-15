import { Component, PropsWithChildren } from "react";
import { View, Button, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./websocket.less";

export default class Websocket extends Component<PropsWithChildren> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    appid: "aaaaaaaa",
    websocketServer:
      "开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名",
    sendMessageAbility: false,
    toSendMessage: "test",
    closeLinkAbility: false,
    log: "",
  };

  componentWillMount() {}

  componentDidMount() {
    // 注意： 回调方法的注册在整个商家应用启动阶段只要做一次，调多次会有多次回调
    Taro.onSocketClose((_res) => {
      Taro.showModal({ content: "连接已关闭！", showCancel: false });
      this.setState({
        sendMessageAbility: false,
        closeLinkAbility: false,
      });
    });
    // 注意： 回调方法的注册在整个商家应用启动阶段只要做一次，调多次会有多次回调
    Taro.onSocketOpen((_res) => {
      Taro.showModal({ content: "连接已打开！", showCancel: false });
      this.setState({
        sendMessageAbility: true,
        closeLinkAbility: true,
      });
    });

    Taro.onSocketError(function (res) {
      Taro.showModal({
        content: "WebSocket 连接打开失败，请检查！" + res,
        showCancel: false,
      });
    });

    // 注意： 回调方法的注册在整个商家应用启动阶段只要做一次，调多次会有多次回调
    Taro.onSocketMessage((res) => {
      Taro.showModal({
        content: "收到数据！" + JSON.stringify(res),
        showCancel: false,
      });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onServerAddressComplete = (e) => {
    this.setState({
      websocketServer: e.detail.value,
    });
  };

  onSendMessageReady = (e) => {
    this.setState({
      toSendMessage: e.detail.value,
    });
  };

  connect_start = () => {
    Taro.connectSocket({
      url: this.state.websocketServer, // 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
    })
      .then(() => {
        Taro.showToast({
          title: "success", // 文字内容
        });
      })
      .catch(() => {
        Taro.showToast({
          title: "fail", // 文字内容
        });
      });
  };

  send_start = () => {
    Taro.sendSocketMessage({
      data: this.state.toSendMessage, // 需要发送的内容
    }).then((_res) => {
      Taro.showModal({
        content: "数据发送！" + this.state.toSendMessage,
        showCancel: false,
      });
    });
  };

  close_start = () => {
    Taro.closeSocket();
  };

  render() {
    const { sendMessageAbility, closeLinkAbility, log } = this.state;
    return (
      <View className="container">
        <View className="subView">
          <Input
            className="server_addr"
            placeholder="wss://YourServer/"
            onConfirm={this.onServerAddressComplete}
            onBlur={this.onServerAddressComplete}
          ></Input>
        </View>
        <View className="subView">
          <Button
            className="buttons"
            // name="startButton"
            onClick={this.connect_start}
          >
            开始连接
          </Button>
        </View>
        {sendMessageAbility ? (
          <View className="subView">
            <Input
              className="message_Text"
              placeholder="输入要发送的消息："
              onConfirm={this.onSendMessageReady}
              onBlur={this.onSendMessageReady}
            ></Input>
          </View>
        ) : null}
        {sendMessageAbility ? (
          <View className="subView">
            <Button
              className="buttons"
              // name="sendButton"
              onClick={this.send_start}
            >
              发送数据
            </Button>
          </View>
        ) : null}
        {closeLinkAbility ? (
          <View className="subView">
            <Button
              className="buttons"
              // name="closeButton"
              onClick={this.close_start}
            >
              关闭
            </Button>
          </View>
        ) : null}
        <View>
          <Text className="run_log">{log}</Text>
          <View></View>
        </View>
      </View>
    );
  }
}
