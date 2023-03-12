import { Component, PropsWithChildren } from "react";
import { View, Button, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./clipboard.less";

export default class Clipboard extends Component<PropsWithChildren> {
  state = {
    text: "3.1415926",
    copy: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleInput = (e: any) => {
    this.setState({
      text: e.detail.value,
    });
  };

  handleCopy = () => {
    Taro.setClipboardData({
      data: this.state.text,
    });
  };

  handlePaste = async () => {
    const { data } = await Taro.getClipboardData();
    this.setState({ copy: data });
  };

  render() {
    const { text, copy } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">setClipboard</View>
          <View className="page-section-demo">
            <Input onInput={this.handleInput} value={text} />
            <Button
              className="clipboard-button"
              type="primary"
              size="mini"
              onClick={this.handleCopy}
            >
              复制
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">getClipboard</View>
          <View className="page-section-demo">
            <Input value={copy} disabled />
            <Button
              className="clipboard-button"
              type="default"
              size="mini"
              onClick={this.handlePaste}
            >
              粘贴
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
