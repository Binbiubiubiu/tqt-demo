import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class MemoryWarning extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  openOne = () => {
    Taro.optionsSelect({
      title: "还款日选择",
      optionsOne: [
        "每周一",
        "每周二",
        "每周三",
        "每周四",
        "每周五",
        "每周六",
        "每周日",
      ],
      selectedOneIndex: 2,
    }).then((res) => {
      Taro.showModal({
        content: JSON.stringify(res, null, 2),
        showCancel: false,
      });
    });
  };

  openTwo = () => {
    Taro.optionsSelect({
      title: "出生年月选择",
      optionsOne: [
        "2014年",
        "2013年",
        "2012年",
        "2011年",
        "2010年",
        "2009年",
        "2008年",
      ],
      optionsTwo: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      selectedOneIndex: 3,
      selectedTwoIndex: 5,
    }).then((res) => {
      Taro.showModal({
        content: JSON.stringify(res, null, 2),
        showCancel: false,
      });
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">选项选择器 API</View>
        <View className="page-section">
          <View className="page-section-title">my.optionsSelect</View>
          <View className="page-section-demo">
            <Button type="primary" onTap={this.openOne}>
              单列选择器
            </Button>
          </View>
          <View className="page-section-demo">
            <Button type="primary" onTap={this.openTwo}>
              双列选择器
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
