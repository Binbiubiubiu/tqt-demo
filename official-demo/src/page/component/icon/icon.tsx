import { Component, PropsWithChildren } from "react";
import { View, Icon, IconProps, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./icon.less";

export default class IconExample extends Component<PropsWithChildren> {
  state = {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: ["red", "yellow", "blue", "green"],
    iconType: [
      "success",
      "info",
      "warn",
      "waiting",
      "clear",
      "success_no_circle",
      "download",
      "cancel",
      "search",
    ] as (keyof IconProps.TIconType)[],
  };

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
    const { iconType, iconSize, iconColor } = this.state;
    return (
      <View className="page">
        <View className="page-description">图标</View>
        <View className="page-section">
          <View className="page-section-title">Type</View>
          <View className="page-section-demo icon-list">
            {iconType.map((item) => {
              return (
                <View className="item" key={item}>
                  <Icon type={item} aria-label={item} size="45" />
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">Size</View>
          <View className="page-section-demo icon-list">
            {iconSize.map((item) => {
              return (
                <View className="item" key={item}>
                  <Icon type="success" size={`${item}`} />
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">Color</View>
          <View className="page-section-demo icon-list">
            {iconColor.map((item) => {
              return (
                <View className="item" key={item}>
                  <Icon type="success" size="45" color={item} />
                  <Text style="color:{{item}}">{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
