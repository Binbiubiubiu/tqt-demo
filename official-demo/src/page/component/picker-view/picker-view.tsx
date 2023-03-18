import { Component, PropsWithChildren } from "react";
import { View, PickerView, PickerViewColumn } from "@tarojs/components";

import "./picker-view.less";

export default class PickerViewExample extends Component<PropsWithChildren> {
  state = {
    value: [],
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = (e) => {
    console.log(e.detail.value);
    this.setState({
      value: e.detail.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <View className="page">
        <View className="page-description">嵌入页面的滚动选择器</View>
        <View className="page-section">
          <View className="page-section-demo">
            <PickerView
              value={value}
              onChange={this.onChange}
              className="my-picker"
            >
              <PickerViewColumn>
                <View>2011</View>
                <View>2012</View>
                <View>2013</View>
                <View>2014</View>
                <View>2015</View>
                <View>2016</View>
                <View>2017</View>
                <View>2018</View>
              </PickerViewColumn>
              <PickerViewColumn>
                <View>春</View>
                <View>夏</View>
                <View>秋</View>
                <View>冬</View>
              </PickerViewColumn>
            </PickerView>
          </View>
        </View>
      </View>
    );
  }
}
