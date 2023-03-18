import { Component, PropsWithChildren } from "react";
import { View, Textarea, Form, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./textarea.less";

export default class TextareaExample extends Component<PropsWithChildren> {
  state = {
    // height: 20,
    focus: false,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  bindButtonTap = () => {
    this.onFocus();
  };
  onFocus = () => {
    this.setState({
      focus: true,
    });
  };
  onBlur = () => {
    this.setState({
      focus: false,
    });
  };

  bindTextAreaBlur = (e) => {
    console.log(e.detail.value);
  };
  bindFormSubmit = (e) => {
    Taro.showModal({
      content: e.detail.value.textarea,
      showCancel: false,
    });
  };

  render() {
    const { focus } = this.state;
    return (
      <View className="page">
        <View className="page-description">文本框</View>
        <View className="page-section">
          <View className="page-section-title">受控聚焦</View>
          <View className="page-section-demo">
            <Textarea
              focus={focus}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              placeholder="Please input something"
            />
          </View>
          <View className="page-section-btns">
            <Button type="default" size="mini" onClick={this.bindButtonTap}>
              聚焦
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">自适应高度</View>
          <View className="page-section-demo">
            <Textarea
              onBlur={this.bindTextAreaBlur}
              auto-height
              placeholder="Please input something"
            />
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">结合表单</View>
          <Form onSubmit={this.bindFormSubmit}>
            <View className="page-section-demo">
              <Textarea name="textarea" placeholder="Please input something" />
            </View>
            <View className="page-section-btns">
              <Button form-type="submit" size="mini" type="primary">
                提交
              </Button>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}
