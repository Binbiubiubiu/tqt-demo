import { Component, PropsWithChildren } from "react";
import { View, Slider } from "@tarojs/components";

export default class SliderExample extends Component<PropsWithChildren> {
  componentWillMount() {
    for (let i = 1; i < 5; ++i) {
      this["slider" + i + "change"] = (e) => {
        console.log("slider" + i + "发生change事件，携带值为", e.detail.value);
      };
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View className="page-description">滑块</View>
        <View className="page-section">
          <View className="page-section-title">设置step</View>
          <View className="page-section-demo">
            <Slider value={5} onChange={this["slider2change"]} step={5} />
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">设置最小/最大值范围</View>
          <View className="page-section-demo">
            <Slider
              value={33}
              onChange={this["slider4change"]}
              min={25}
              max={50}
              show-value
            />
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">自定义样式</View>
          <View className="page-section-demo">
            <Slider
              value={33}
              onChange={this["slider4change"]}
              min={25}
              max={50}
              show-value
              backgroundColor="#FFAA00"
              activeColor="#00aaee"
              trackSize="2"
              handleSize="6"
              handleColor="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}
