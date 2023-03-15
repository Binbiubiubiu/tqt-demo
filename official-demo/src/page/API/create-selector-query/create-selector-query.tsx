import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class CreateSelectorQuery extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  createSelectorQuery = () => {
    Taro.createSelectorQuery()
      .select("#non-exists")
      .boundingClientRect()
      .select("#one")
      .boundingClientRect()
      .selectAll(".all")
      .boundingClientRect()
      .select("#scroll")
      .scrollOffset()
      .selectViewport()
      .boundingClientRect()
      .selectViewport()
      .scrollOffset()
      .exec((ret) => {
        console.log(ret);
        Taro.showModal({
          content: JSON.stringify(ret, null, 2),
          showCancel: false,
        });
      });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">节点查询 API</View>
        <View className="page-section">
          <View className="all">节点 all1</View>
          <View className="all">节点 all2</View>
          <View id="one">节点 one</View>
          <View id="scroll" style="height:200px;overflow: auto">
            <View style="height:400px">独立滚动区域</View>
          </View>
          <Button type="primary" onClick={this.createSelectorQuery}>
            节点查询
          </Button>
        </View>
      </View>
    );
  }
}
