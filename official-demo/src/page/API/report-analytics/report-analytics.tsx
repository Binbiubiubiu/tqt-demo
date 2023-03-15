import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./report-analytics.less";

export default class ReportAnalytics extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  reportAnalytics = () => {
    Taro.reportAnalytics("demo_click", {});
    Taro.showModal({
      content: "数据上报成功，请到商家应用管理后台-数据分析中查看",
      showCancel: false,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">自定义分析 API</View>
        <View className="page-section">
          <View className="page-section-title">my.reportAnalytics</View>
          <View className="page-section-demo">
            <View className="report" onClick={this.reportAnalytics}>
              自定义分析
            </View>
          </View>
        </View>
      </View>
    );
  }
}
