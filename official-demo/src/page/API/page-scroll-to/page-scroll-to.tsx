import { Component, PropsWithChildren } from "react";
import { View, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class PageScrollTo extends Component<PropsWithChildren> {
  state = {
    scrollTop: 0,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  scrollTopChange = (e) => {
    this.setState({
      scrollTop: e.detail.value,
    });
  };
  onPageScroll({ scrollTop }) {
    console.log("onPageScroll", scrollTop);
  }
  scrollTo = () => {
    Taro.pageScrollTo({
      scrollTop: ~~this.state.scrollTop,
    });
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <View className="page">
        <View className="page-description">页面滚动 API</View>

        <View className="page-section">
          <View className="page-section-title">my.pageScrollTo</View>
          <View className="page-section-demo">
            <Input
              type="text"
              placeholder="key"
              name="key"
              value={scrollTop + ""}
              onInput={this.scrollTopChange}
            ></Input>
          </View>
          <View className="page-section-btns">
            <View onClick={this.scrollTo}>页面滚动</View>
          </View>
        </View>

        <View style="height:1000px" />
      </View>
    );
  }
}
