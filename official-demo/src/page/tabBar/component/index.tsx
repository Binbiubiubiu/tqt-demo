import { Component, PropsWithChildren } from "react";
import { View, Text, Icon, Image, Navigator, Slot } from "@tarojs/components";
import Taro from "@tarojs/taro";
import clsx from "clsx";

import BlockList from "../../common/components/block-list";
import { basicComponentList, extComponentList } from "./constants";
import "./index.less";

export default class TabBarComponent extends Component<PropsWithChildren> {
  state = {
    top: 0,
    hot: [
      { name: "ScrollView", url: "/page/component/scroll-View/scroll-View" },
      { name: "地图", url: "/page/component/map/map" },
      { name: "Icon", url: "/page/component/icon/icon" },
      { name: "Card", url: "/page/component/card/card" },
      { name: "获取授权码", url: "/page/API/get-auth-code/get-auth-code" },
      { name: "Popup", url: "/page/component/popup/popup" },
      // { name: '发起HTTP请求', url: '/page/API/request/request' },
      { name: "画布", url: "/page/component/canvas/canvas" },
      { name: "导航", url: "/page/API/navigator/navigator" },
    ],
    tabs: ["基础组件", "扩展组件"],
    activeTab: 0,
    titleOpacity: 1,
    shadow: false,
  };

  componentWillMount() {
    Taro.getSystemInfo().then((res) => {
      if (res.statusBarHeight && res.titleBarHeight) {
        this.setState({
          top: res.statusBarHeight + res.titleBarHeight,
        });
      }
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPageScroll(e) {
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      Taro.setNavigationBarTitle({
        title: "商家应用官方示例",
      });
    } else {
      Taro.setNavigationBarTitle({
        title: " ",
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setState({
      shadow,
      titleOpacity,
    });
  }

  onSearchBarTap = () => {
    Taro.navigateTo({
      url: "/page/common/search/search",
    });
  };
  onTabBarTap(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { titleOpacity, hot, tabs, activeTab, shadow, top } = this.state;
    return (
      <View>
        <View className="banner">
          <View className="logo" style={{ opacity: titleOpacity }}>
            <Image src="/image/component_logo.png" mode="aspectFit" />
          </View>
          <View className="title" style={{ opacity: titleOpacity }}>
            商家应用官方示例
          </View>
          <View className="sub-title" style={{ opacity: titleOpacity }}>
            以下展示商家应用官方组件和API
          </View>
          <View className="fake-searchbar" onClick={this.onSearchBarTap}>
            <Icon type="search" size="14" color="#1D1D1D" />
            <Text className="fake-placeholder">搜索你想要的组件和API</Text>
          </View>
        </View>
        <BlockList listData={hot} className="hot" />
        <View
          className={clsx("tabs", shadow ? "shadow" : "")}
          style={{ top: top }}
        >
          <View className="tabs-bar">
            {tabs.map((item, index) => {
              return (
                <View
                  className="tabs-bar-tab"
                  onClick={this.onTabBarTap.bind(this, index)}
                  key={index}
                >
                  <View
                    className={clsx(
                      "tabs-bar-tab-title",
                      activeTab === index ? "active" : ""
                    )}
                  >
                    {item}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View className="list-wrap">
          <View
            className="list-container"
            style={{
              transform: "translate3d(" + -activeTab * 100 + "vw, 0, 0)",
            }}
          >
            <View
              className="list"
              style={{ height: activeTab === 0 ? "auto" : 0 }}
              key="basicComponentList"
            >
              {basicComponentList.map((iList, index) => {
                return (
                  <am-list className="list-item" key={`list-${index}`}>
                    <Slot name="header">
                      <View className="list-header">{iList.type}</View>
                    </Slot>
                    {iList.list.map((item) => {
                      return (
                        <am-list-item
                          arrow
                          multipleLine={false}
                          key={`items-${item.name}`}
                          last
                        >
                          <Navigator
                            url={item.path}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Image
                              src={item.thumb}
                              className="thumb"
                              mode="aspectFit"
                            />
                            <Text className="component-name">{item.name}</Text>
                            <Text className="component-brief">
                              {item.nameEn}
                            </Text>
                          </Navigator>
                        </am-list-item>
                      );
                    })}
                  </am-list>
                );
              })}
            </View>
            <View
              className="list"
              style={{ height: activeTab === 1 ? "auto" : 0 }}
              key="extComponentList"
            >
              {extComponentList.map((iList, index) => {
                return (
                  <am-list className="list-item" key={`list-${index}`}>
                    <Slot name="header">
                      <View className="list-header">{iList.type}</View>
                    </Slot>
                    {iList.list.map((item) => {
                      return (
                        <am-list-item
                          arrow
                          multipleLine={false}
                          key={`items-${item.name}`}
                          last
                        >
                          <Navigator
                            url={item.path}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Image
                              src={item.thumb}
                              className="thumb"
                              mode="aspectFit"
                            />
                            <Text className="component-name">{item.name}</Text>
                            <Text className="component-brief">
                              {item.nameEn}
                            </Text>
                          </Navigator>
                        </am-list-item>
                      );
                    })}
                  </am-list>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
