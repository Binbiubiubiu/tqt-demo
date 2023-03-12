import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class ChooseCity extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  chooseCity = async () => {
    await Taro.authorize({
      scope: "scope.location",
    });
    const res = await Taro.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
    });
    Taro.showModal({
      title: "chooseCity response: " + JSON.stringify(res),
      showCancel: false,
    });
  };
  setLocatedCity = async () => {
    // my.onLocatedComplete({
    //   success: (res) => {
    //     my.setLocatedCity({
    //       locatedCityId:res.locatedCityId,//res.locatedCityId
    //       locatedCityName:'修改后的城市名',
    //       success: (res) => {
    //         my.alert({ content: '修改当前定位城市成功' + JSON.stringify(res), });
    //       },
    //       fail: (error) => {
    //         my.alert({ content: '修改当前定位城市失败' + JSON.stringify(error), });
    //       },
    //     });
    //   },
    //   fail: (error) => {
    //     my.alert({ content: 'onLocatedComplete失败' + JSON.stringify(error), });
    //   }
    // });
    const res = await Taro.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
    });

    Taro.showModal({
      title: "chooseCity response: " + JSON.stringify(res),
      showCancel: false,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">选择城市 API</View>
        <View className="page-section">
          <View className="page-section-title">my.chooseCity</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.chooseCity}>
              选择城市
            </Button>
          </View>
        </View>
        <View className="page-description">修改当前定位城市的名称 API</View>
        <View className="page-section">
          <View className="page-section-title">my.setLocatedCity</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.setLocatedCity}>
              修改当前定位城市的名称
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
