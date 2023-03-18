import { Component, PropsWithChildren } from "react";
import { View, ScrollView } from "@tarojs/components";

import "./scroll-view.less";

import debounce from "../../../util/debounce";

const order = ["blue", "red", "green", "yellow"];

export default class ScrollViewExample extends Component<PropsWithChildren> {
  state = {
    toView: "red",
    scrollTop: 100,
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  upper = (e) => {
    console.log(e);
  };
  lower = (e) => {
    console.log(e);
  };
  scroll = debounce((e: any) => {
    this.setState({
      scrollTop: e.detail.scrollTop,
    });
  }, 100);
  scrollEnd = () => {};
  scrollToTop = (e) => {
    console.log(e);
    this.setState({
      scrollTop: 0,
    });
  };

  tap = (e) => {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.state.toView) {
        const next = (i + 1) % order.length;
        this.setState({
          toView: order[next],
          scrollTop: next * 200,
        });
        break;
      }
    }
  };
  tapMove = () => {
    this.setState({
      scrollTop: this.state.scrollTop + 10,
    });
  };

  render() {
    const { toView, scrollTop } = this.state;
    return (
      <View className="page">
        <View className="page-description">可滚动视图区域</View>
        <View className="page-section">
          <View className="page-section-title">vertical scroll</View>
          <View className="page-section-demo">
            <ScrollView
              scroll-y
              style="height: 200px;"
              onScrollToUpper={this.upper}
              onScrollToLower={this.lower}
              onScroll={this.scroll}
              scroll-into-View={toView}
              scroll-top={scrollTop}
            >
              <View id="blue" className="scroll-view-item bc_blue"></View>
              <View id="red" className="scroll-view-item bc_red"></View>
              <View id="yellow" className="scroll-view-item bc_yellow"></View>
              <View id="green" className="scroll-view-item bc_green"></View>
            </ScrollView>
          </View>
          <View className="page-section-btns">
            <View onClick={this.tap}>next</View>
            <View onClick={this.tapMove}>move</View>
            <View onClick={this.scrollToTop}>scrollToTop</View>
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">horizontal scroll</View>
          <View className="page-section-demo">
            <ScrollView className="scroll-view_H" scroll-x style="width: 100%">
              <View id="blue2" className="scroll-view-item_H bc_blue"></View>
              <View id="red2" className="scroll-view-item_H bc_red"></View>
              <View
                id="yellow2"
                className="scroll-view-item_H bc_yellow"
              ></View>
              <View id="green2" className="scroll-view-item_H bc_green"></View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
