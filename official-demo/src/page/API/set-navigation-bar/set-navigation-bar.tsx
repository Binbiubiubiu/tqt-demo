import { Component, PropsWithChildren } from "react";
import { View, Form, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./set-navigation-bar.less";

export default class SetNavigationBar extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  setNavigationBar = (e) => {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    console.log(title);
    Taro.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
    });
  };
  resetNavigationBar = () => {
    Taro.setNavigationBar({
      reset: true,
      title: "重置导航栏样式",
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">设置导航栏 API</View>
        <Form onSubmit={this.setNavigationBar} style={{ alignSelf: "stretch" }}>
          <View className="page-section">
            <View className="page-section-demo">
              <Input
                className="page-body-Form-value"
                type="text"
                placeholder="标题"
                name="title"
              ></Input>
              <Input
                className="page-body-Form-value"
                type="text"
                placeholder="导航栏背景色"
                name="backgroundColor"
              ></Input>
              <Input
                className="page-body-Form-value"
                type="text"
                placeholder="导航栏底部边框颜色"
                name="borderBottomColor"
              ></Input>
              <Input
                className="page-body-Form-value"
                type="text"
                placeholder="导航栏图片地址"
                name="image"
              ></Input>
            </View>
            <View className="page-section-btns">
              <Button type="primary" size="mini" formType="submit">
                设置
              </Button>
              <Button
                type="primary"
                size="mini"
                onClick={this.resetNavigationBar}
              >
                重置
              </Button>
            </View>
          </View>
        </Form>
        <View className="tips">
          tips:
          <View className="item">
            1. image:图片链接地址，必须 https，请使用一张3x高清图。若设置了
            image，则 title 参数失效
          </View>
          <View className="item">
            2. backgroundColor: 导航栏背景色，支持 16 进制颜色值
          </View>
          <View className="item">
            3. borderBottomColor: 导航栏底部边框颜色，支持16进制颜色值。若设置了
            backgroundColor，borderBottomColor 会不生效，默认会和
            backgroundColor 颜色一样。
          </View>
        </View>
      </View>
    );
  }
}
