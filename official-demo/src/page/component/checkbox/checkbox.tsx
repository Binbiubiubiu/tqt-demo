import { Component, PropsWithChildren } from "react";
import {
  View,
  CheckboxGroup,
  Label,
  Checkbox,
  Button,
  Form,
  Text,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./checkbox.less";

export default class CheckboxExample extends Component<PropsWithChildren> {
  state = {
    items: [
      { name: "angular", value: "AngularJS" },
      { name: "react", value: "React", checked: true },
      { name: "polymer", value: "Polymer" },
      { name: "vue", value: "Vue.js" },
      { name: "ember", value: "Ember.js" },
      { name: "backbone", value: "Backbone.js", disabled: true },
    ],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSubmit = (e) => {
    console.log("onSubmit", e);
    Taro.showModal({
      content: `你选择的框架是 ${e.detail.value.libs.join(", ")}`,
      showCancel: false,
    });
  };
  onReset = (e) => {
    console.log("onReset", e);
  };
  onChange = (e) => {
    console.log(e);
  };

  render() {
    const { items } = this.state;
    return (
      <View className="page">
        <View className="page-description">多项选择器</View>
        <Form onSubmit={this.onSubmit} onReset={this.onReset}>
          <View className="page-section">
            <View className="page-section-title">选择你用过的框架：</View>
            <View className="page-section-demo">
              <CheckboxGroup onChange={this.onChange} name="libs">
                {items.map((item, index) => {
                  return (
                    <Label className="checkbox" key={`label-${index}`}>
                      <Checkbox
                        value={item.name}
                        checked={item.checked}
                        disabled={item.disabled}
                      />
                      <Text className="checkbox-text">{item.value}</Text>
                    </Label>
                  );
                })}
              </CheckboxGroup>
            </View>
            <View className="page-section-btns">
              <View>
                <Button type="ghost" size="mini" formType="reset">
                  reset
                </Button>
              </View>
              <View>
                <Button type="primary" size="mini" formType="submit">
                  submit
                </Button>
              </View>
            </View>
          </View>
        </Form>
      </View>
    );
  }
}
