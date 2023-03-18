import { Component, PropsWithChildren } from "react";
import { View, WebView } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class WebViewExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onmessage(e) {
    Taro.showModal({
      content: "拿到数据" + JSON.stringify(e), // alert 框的标题
      showCancel: false,
    });
  }

  render() {
    return (
      <View className="page">
        <WebView
          src="https://render.alipay.com/p/w/tinyapp-demo-h5/index.html"
          onMessage={this.onmessage}
        ></WebView>
      </View>
    );
  }
}
