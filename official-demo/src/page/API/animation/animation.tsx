import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./animation.less";

export default class Animation extends Component<PropsWithChildren> {
  // eslint-disable-next-line react/sort-comp
  animation: Taro.Animation = Taro.createAnimation({});

  state = {
    animation: this.animation.export(),
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  rotate = () => {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setState({ animation: this.animation.export() });
  };
  scale = () => {
    this.animation.scale(Math.random() * 2).step();
    this.setState({ animation: this.animation.export() });
  };
  translate = () => {
    this.animation
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step();
    this.setState({ animation: this.animation.export() });
  };
  skew = () => {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step();
    this.setState({ animation: this.animation.export() });
  };
  rotateAndScale = () => {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step();
    this.setState({ animation: this.animation.export() });
  };
  rotateThenScale = () => {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step();
    this.setState({ animation: this.animation.export() });
  };
  all = () => {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
    this.setState({ animation: this.animation.export() });
  };
  allInQueue = () => {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
    this.setState({ animation: this.animation.export() });
  };
  reset = () => {
    this.animation
      .rotate3d(0, 0, 0, 0)
      .rotateX(0)
      .rotateY(0)
      .rotateZ(0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 });
    this.setState({ animation: this.animation.export() });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">动画 API</View>
        <View className="page-section">
          <View className="page-section-title">my.createAnimation</View>
          <View className="page-section-demo">
            <View
              className="animation-element"
              animation={this.state.animation}
            ></View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.rotate}>旋转</View>
            <View onClick={this.scale}> 缩放</View>
            <View onClick={this.translate}>移动</View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.skew}>倾斜</View>
            <View onClick={this.rotateAndScale}>旋转并缩放</View>
            <View onClick={this.rotateThenScale}>旋转后缩放</View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.all}>同时展示全部</View>
            <View onClick={this.allInQueue}>顺序展示全部</View>
            <View onClick={this.reset}>还原</View>
          </View>
        </View>
      </View>
    );
  }
}
