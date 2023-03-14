import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class RequestExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // httpRequest = () => {
  //   my.httpRequest({
  //     url: "http://httpbin.org/post",
  //     method: "POST",
  //     data: {
  //       from: "淘宝",
  //       production: "AlipayJSAPI",
  //     },
  //     dataType: "json",
  //     success: function (res) {
  //       Taro.showModal({ content: JSON.stringify(res), showCancel: false });
  //     },
  //     fail: function (res) {
  //       Taro.showModal({ content: JSON.stringify(res), showCancel: false });
  //     },
  //     complete: function (_res) {
  //       // my.alert({title: 'complete'});
  //     },
  //   });
  // };
  request() {
    Taro.request({
      url: "https://httpbin.org/post",
      method: "POST",
      data: {
        from: "淘宝",
        production: "AlipayJSAPI",
      },
      dataType: "json",
    })
      .then((res) => {
        Taro.showModal({ content: JSON.stringify(res), showCancel: false });
      })
      .catch((res) => {
        Taro.showModal({ content: JSON.stringify(res), showCancel: false });
      });
  }
  requestAndAbort = () => {
    const task = Taro.request({
      url: "https://httpbin.org/post",
      method: "POST",
      data: {
        from: "淘宝",
        production: "AlipayJSAPI",
      },
      dataType: "json",
      success: function (res) {
        Taro.showModal({ content: JSON.stringify(res), showCancel: false });
      },
      fail: function (res) {
        Taro.showModal({ content: JSON.stringify(res), showCancel: false });
      },
      complete: function (_res) {
        // my.alert({title: 'complete'});
      },
    });
    task.abort();
  };

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">my.request</View>
          <View className="page-section-btns">
            <View onClick={this.request}>发起请求</View>
            <View onClick={this.requestAndAbort}>发起后取消请求</View>
          </View>
        </View>
        {/* <View className="page-section">
          <View className="page-section-title">my.httpRequest</View>
          <View className="page-section-btns">
            <View onClick={this.httpRequest}>发起请求</View>
          </View>
        </View> */}
      </View>
    );
  }
}
