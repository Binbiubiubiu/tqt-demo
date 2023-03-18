import { Component, PropsWithChildren } from "react";
import { View, Switch } from "@tarojs/components";

import "./switch.less";

export default class SwitchExample extends Component<PropsWithChildren> {
  state = {
    switch1: true,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  switch1Change = (e) => {
    console.log("switch1 发生 change 事件，携带值为", e.detail.value);
    this.setState({
      switch1: e.detail.value,
    });
  };
  switch2Change = (e) => {
    console.log("switch2 发生 change 事件，携带值为", e.detail.value);
  };

  render() {
    const { switch1 } = this.state;
    return (
      <View className="page">
        <View className="page-description">开关</View>
        <View className="page-section">
          <View className="page-section-demo switch-list">
            <View className="switch-item">
              <Switch
                checked
                onChange={this.switch1Change}
                aria-label={switch1 ? "switch opened" : "switch closed"}
              />
            </View>
            <View className="switch-item">
              <Switch onChange={this.switch2Change} />
            </View>
            <View className="switch-item">
              <Switch color="red" checked />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
