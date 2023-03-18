import { Component, PropsWithChildren } from "react";
import {
  View,
  Slider,
  Switch,
  Label,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Form,
  Button,
  Input,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./form.less";

export default class FormExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSubmit = (e) => {
    Taro.showModal({
      content: `数据：${JSON.stringify(e.detail.value)}`,
      showCancel: false,
    });
  };
  onReset = () => {};

  render() {
    return (
      <View className="page">
        <View className="page-description">表单</View>
        <Form onSubmit={this.onSubmit} onReset={this.onReset}>
          <View className="page-section">
            <View className="page-section-title">Slider</View>
            <View className="page-section-demo">
              <Slider value={80} name="slider" showValue />
            </View>
          </View>
          <View className="page-section">
            <View className="form-row">
              <View className="form-row-label">Switch</View>
              <View className="form-row-content" style="text-align: right">
                <Switch name="switch" />
              </View>
            </View>
            <View className="form-line" />
            <View className="form-row">
              <View className="form-row-label">Input</View>
              <View className="form-row-content">
                <Input
                  name="input"
                  className="input"
                  placeholder="input something"
                />
              </View>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">Radio</View>
            <View className="page-section-demo">
              <RadioGroup name="radio-group">
                <Label>
                  <Radio value="radio1" />
                  radio1
                </Label>
                <Label>
                  <Radio value="radio2" />
                  radio2
                </Label>
              </RadioGroup>
            </View>
          </View>
          <View className="page-section">
            <View className="page-section-title">Checkbox</View>
            <View className="page-section-demo">
              <CheckboxGroup name="checkbox">
                <Label>
                  <Checkbox value="checkbox1" />
                  checkbox1
                </Label>
                <Label>
                  <Checkbox value="checkbox2" />
                  checkbox2
                </Label>
              </CheckboxGroup>
            </View>
            <View className="page-section-btns">
              <View>
                <Button type="ghost" size="mini" formType="reset">
                  Reset
                </Button>
              </View>
              <View>
                <Button type="primary" size="mini" formType="submit">
                  Submit
                </Button>
              </View>
            </View>
          </View>
        </Form>
      </View>
    );
  }
}
