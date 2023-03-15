import { Component, PropsWithChildren } from "react";
import { View, Button, Slider, Switch } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Screen extends Component<PropsWithChildren> {
  state = {
    status: false,
    brightness: 1,
  };

  componentWillMount() {}

  componentDidMount() {
    Taro.getScreenBrightness().then((res) => {
      this.setState({
        brightness: res.value,
      });
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  SliderChange = (e) => {
    Taro.setScreenBrightness({
      value: e.detail.value,
      success: (_res) => {
        this.setState({
          brightness: e.detail.value,
        });
      },
    });
  };
  switchKeepScreenOn = (e) => {
    Taro.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: (_res) => {
        this.setState({
          status: e.detail.value,
        });
      },
    });
  };
  getBrightness = () => {
    Taro.getScreenBrightness({
      success: (res) => {
        Taro.showModal({
          content: `当前屏幕亮度：${res.value}`,
          showCancel: false,
        });
      },
    });
  };

  render() {
    const { status, brightness } = this.state;
    return (
      <View className="page">
        <View className="page-description">屏幕亮度 API</View>
        <View className="page-section">
          <View className="page-section-title">设置是否保持屏幕长亮状态</View>
          <View className="page-section-demo">
            <Switch checked={status} onChange={this.switchKeepScreenOn} />
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">设置屏幕亮度</View>
          <View className="page-section-demo">
            <Slider
              value={brightness}
              max={1}
              min={0}
              onChange={this.SliderChange}
              step={0.02}
            />
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">获取屏幕亮度</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.getBrightness}>
              获取屏幕亮度
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
