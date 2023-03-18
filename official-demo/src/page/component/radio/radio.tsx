import { Component, PropsWithChildren } from "react";
import {
  View,
  Form,
  RadioGroup,
  Radio,
  Label,
  Text,
  Button,
} from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./radio.less";

export default class RadioExample extends Component<PropsWithChildren> {
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
    Taro.showModal({
      content: e.detail.value.lib,
      showCancel: false,
    });
    console.log("onSubmit", e.detail);
  };
  onReset = (e) => {
    console.log("onReset", e);
  };
  radioChange = (e) => {
    console.log("你选择的框架是：", e.detail.value);
  };

  render() {
    const { items } = this.state;
    return (
      <View className="page">
        <View className="page-description">单选框</View>
        <View className="page-section">
          <View className="section section_gap">
            <Form onSubmit={this.onSubmit} onReset={this.onReset}>
              <View className="page-section-demo">
                <RadioGroup
                  className="radio-group"
                  onChange={this.radioChange}
                  name="lib"
                >
                  {items.map((item, index) => {
                    return (
                      <Label className="radio" key={`label-${index}`}>
                        <Radio
                          value={item.name}
                          checked={item.checked}
                          disabled={item.disabled}
                        />
                        <Text className="radio-text">{item.value}</Text>
                      </Label>
                    );
                  })}
                </RadioGroup>
              </View>
              <View className="page-section-btns">
                <View>
                  <Button size="mini" type="ghost" formType="reset">
                    reset
                  </Button>
                </View>
                <View>
                  <Button size="mini" type="primary" formType="submit">
                    submit
                  </Button>
                </View>
              </View>
            </Form>
          </View>
        </View>
      </View>
    );
  }
}
