import { Component, PropsWithChildren } from "react";
import { View, Button, Textarea } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class TextRiskIdentification extends Component<PropsWithChildren> {
  state = {
    value: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleInput = (event) => {
    this.setState({
      value: event.detail.value,
    });
  };

  textRiskIdentification = () => {
    Taro.tb
      .textRiskIdentification({
        text: this.state.value,
      })
      .then((res) => {
        console.log(res)
        Taro.showModal({
          title: this.state.value,
          content: JSON.stringify(res),
          showCancel: false,
        });
      });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">文本风险识别 API</View>
        <View className="page-section">
          <View className="page-section-title">my.textRiskIdentification</View>
          <View className="page-section-demo">
            <Textarea
              placeholder="输入文本内容"
              onInput={this.handleInput}
              name="textarea"
            />
            <Button type="primary" onClick={this.textRiskIdentification}>
              开始识别
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
