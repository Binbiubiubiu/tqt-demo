import { Component, PropsWithChildren } from "react";
import { View, Swiper, SwiperItem, Slider } from "@tarojs/components";

import "./swiper.less";

export default class SwiperExample extends Component<PropsWithChildren> {
  state = {
    background: ["blue", "red", "yellow"],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  changeIndicatorDots = (e) => {
    this.setState({
      indicatorDots: !this.state.indicatorDots,
    });
  };
  changeVertical = () => {
    this.setState({
      vertical: !this.state.vertical,
    });
  };
  changeCircular = (e) => {
    this.setState({
      circular: !this.state.circular,
    });
  };
  changeAutoplay = (e) => {
    this.setState({
      autoplay: !this.state.autoplay,
    });
  };
  intervalChange = (e) => {
    this.setState({
      interval: e.detail.value,
    });
  };

  render() {
    const {
      autoplay,
      vertical,
      interval,
      circular,
      background,
      indicatorDots,
    } = this.state;
    return (
      <View className="page">
        <View className="page-description">滑块视图容器</View>
        <View className="page-section">
          <View className="page-section-demo">
            <Swiper
              style="height:150px"
              className="demo-swiper"
              previousMargin="10px"
              nextMargin="10px"
              indicator-dots={indicatorDots}
              autoplay={autoplay}
              vertical={vertical}
              interval={interval}
              circular={circular}
            >
              {background.map((item, index) => {
                return (
                  <SwiperItem key={`swiper-item-${index}`}>
                    <View className={`swiper-item bc_${item}`}></View>
                  </SwiperItem>
                );
              })}
            </Swiper>
            <View className="margin-t">
              <Slider
                onChange={this.intervalChange}
                value={interval}
                show-value
                min={500}
                max={2000}
              />
              <View>interval</View>
            </View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.changeIndicatorDots}>indicator-dots</View>
            <View onClick={this.changeAutoplay}>autoplay</View>
            <View onClick={this.changeVertical}>vertical</View>
          </View>
          <View className="page-section-btns">
            <View onClick={this.changeCircular}>circular</View>
          </View>
        </View>
      </View>
    );
  }
}
