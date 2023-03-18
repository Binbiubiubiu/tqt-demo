import { Component, PropsWithChildren } from "react";
import { View, Progress } from "@tarojs/components";

import "./progress.less";

export default class ProgressExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View className="page-description">进度条</View>
        <View className="page-section">
          <View className="page-section-demo">
            <Progress percent={20} show-info />
            <Progress percent={40} active />
            <Progress percent={60} stroke-width="10" />
            <Progress percent={80} color="#10AEFF" />
            <Progress
              percent={80}
              activeColor="#6abf47"
              backgroundColor="#f4333c"
            />
          </View>
        </View>
      </View>
    );
  }
}
