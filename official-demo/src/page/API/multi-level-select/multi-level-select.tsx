import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class MultiLevelSelect extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  openMultiLevelSelect = () => {
    Taro.multiLevelSelect({
      title: "多级联选择器", //级联选择标题
      list: [
        {
          name: "杭州市", //条目名称
          subList: [
            {
              name: "西湖区",
              subList: [
                {
                  name: "古翠街道",
                },
                {
                  name: "文新街道",
                },
              ],
            },
            {
              name: "上城区",
              subList: [
                {
                  name: "延安街道",
                },
                {
                  name: "龙翔桥街道",
                },
              ],
            },
          ], //级联子数据列表
        },
      ], //级联数据列表
    }).then((res) => {
      Taro.showModal({ title: JSON.stringify(res), showCancel: false });
    });
  };
  render() {
    return (
      <View className="page">
        <View className="page-description">多级联选择器 API</View>
        <View className="page-section">
          <View className="page-section-title">my.multiLevelSelect</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.openMultiLevelSelect}>
              多级联选择器
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
