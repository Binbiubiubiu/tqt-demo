import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import formatLocation from "./format-location";

import "./get-location.less";

export default class GetLocation extends Component<PropsWithChildren> {
  state = {
    hasLocation: false,
    location: {
      longitude: [],
      latitude: [],
    },
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLocation = async () => {
    var that = this;
    Taro.showLoading();
    await Taro.authorize({
      scope: "scope.location",
    });
    Taro.getLocation({})
      .then((res) => {
        Taro.hideLoading();
        console.log(res);
        that.setState({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
        });
      })
      .catch(() => {
        Taro.hideLoading();
        Taro.showModal({ title: "定位失败", showCancel: false });
      });
  };
  clear = () => {
    this.setState({
      hasLocation: false,
    });
  };

  render() {
    const { hasLocation, location } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            <View>当前位置经纬度</View>
            {hasLocation === false ? <Text>未获取</Text> : null}

            {hasLocation === true ? (
              <View className="page-body-Text-location">
                <Text>
                  E{location.longitude[0]}°{location.longitude[1]}′
                </Text>
                <Text>
                  N{location.latitude[0]}°{location.latitude[1]}′
                </Text>
              </View>
            ) : null}
          </View>

          <View className="page-section-btns">
            <View onClick={this.getLocation}>获取位置</View>
            <View onClick={this.clear}>清空</View>
          </View>
        </View>
      </View>
    );
  }
}
