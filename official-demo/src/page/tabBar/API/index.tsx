import { Component, PropsWithChildren } from "react";
import { View, Text, Icon, Slot, Navigator } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

import Open from "./categories/open";
import Interface from "./categories/interface";
import Device from "./categories/device";
import Media from "./categories/media";
import Location from "./categories/location";
import Network from "./categories/network";
import Other from "./categories/other";

const APIList = [
  // Open,
  Interface,
  Device,
  // Network,
  Media,
  Location,
  Other,
];

export default class API extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSearchBarTap = () => {
    Taro.navigateTo({
      url: "/page/common/search/search",
    });
  };

  render() {
    return (
      <View>
        <View className="banner" style="height:60rpx">
          <View className="fake-searchbar" onClick={this.onSearchBarTap}>
            <Icon type="search" size="14" color="#1D1D1D" />
            <Text className="fake-placeholder">搜索你想要的组件和API</Text>
          </View>
        </View>
        <View className="list" style="padding-top: 80rpx">
          {APIList.map((list, i) => {
            return (
              <am-list classNameName="list-item" key={`list-${i}`}>
                <Slot name="header">
                  <View className="list-header">{list.type}</View>
                </Slot>
                {list.list.map((item, index) => {
                  return (
                    <am-list-item
                      arrow
                      multipleLine={false}
                      key={`items-${item.name}`}
                      last={index === list.list.length - 1}
                    >
                      <Navigator
                        url={item.path}
                        style="display: flex; align-items: center"
                      >
                        <Text className="component-name">{item.name}</Text>
                      </Navigator>
                    </am-list-item>
                  );
                })}
              </am-list>
            );
          })}
        </View>
      </View>
    );
  }
}
