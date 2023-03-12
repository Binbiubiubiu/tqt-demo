import { Component, PropsWithChildren } from "react";
import { View, Text, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class ChooseLocation extends Component<PropsWithChildren> {
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

  chooseLocation = async () => {
    var that = this;
    await Taro.authorize({
      scope: "scope.location",
    });
    try {
      const res = await Taro.chooseLocation({});
      console.log(JSON.stringify(res));
      that.setState({
        longitude: res.longitude,
        latitude: res.latitude,
        name: res.name,
        address: res.address,
      });
    } catch (error) {
      Taro.showModal({
        content: "调用失败：" + JSON.stringify(error),
        showCancel: false,
      });
    }
  };

  render() {
    const { longitude, latitude, name, address } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-demo">
            <Text>经度:</Text>
            <Input value={longitude}></Input>
          </View>
          <View className="page-section-demo">
            <Text>纬度:</Text>
            <Input value={latitude}></Input>
          </View>
          <View className="page-section-demo">
            <Text>位置名称:</Text>
            <Input value={name}></Input>
          </View>
          <View className="page-section-demo">
            <Text>详细位置:</Text>
            <Input value={address}></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.chooseLocation}>选择位置</View>
          </View>
        </View>
      </View>
    );
  }
}
