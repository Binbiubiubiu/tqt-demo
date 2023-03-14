import { Component, PropsWithChildren } from "react";
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./open-location.less";

export default class OpenLocation extends Component<PropsWithChildren> {
  state = {
    longitude: "120.126293",
    latitude: "30.274653",
    name: "黄龙万科中心",
    address: "学院路77号",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  openLocation = async () => {
    await Taro.authorize({
      scope: "scope.location",
    });
    Taro.openLocation({
      longitude: +this.state.longitude,
      latitude: +this.state.latitude,
      name: this.state.name,
      address: this.state.address,
    });
  };

  render() {
    const { longitude, latitude, name, address } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            <Text>经度</Text>
            <Input
              type="text"
              disabled
              value={longitude}
              name="longitude"
            ></Input>
          </View>
          <View className="page-section-demo">
            <Text>纬度</Text>
            <Input
              type="text"
              disabled
              value={latitude}
              name="latitude"
            ></Input>
          </View>
          <View className="page-section-demo">
            <Text>位置名称</Text>
            <Input type="text" disabled value={name} name="name"></Input>
          </View>
          <View className="page-section-demo">
            <Text>详细位置</Text>
            <Input type="text" disabled value={address} name="address"></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.openLocation}>查看位置</View>
          </View>
        </View>
      </View>
    );
  }
}
