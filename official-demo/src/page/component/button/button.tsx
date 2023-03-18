import { Component, PropsWithChildren } from "react";
import { View, Button, Form } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./button.less";

export default class ButtonExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage() {
    return {
      title: "View page",
      path: "page/component/button/button",
    };
  }

  onSubmit = () => {
    Taro.showModal({ title: "You click submit", showCancel: false });
  };
  onReset = () => {
    Taro.showModal({ title: "You click reset", showCancel: false });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">按钮</View>
        <View className="page-section">
          <View className="page-section-title">type-primary/ghost</View>
          <View className="page-section-demo">
            <Button type="primary">主要操作 Normal</Button>
            <Button type="primary" loading>
              操作
            </Button>
            <Button type="primary" disabled>
              主要操作 Disable
            </Button>
            <Button type="ghost">ghost操作</Button>
            <Button type="ghost" loading>
              ghost操作
            </Button>
            <Button type="ghost" disabled>
              ghost操作 Disable
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">type-default</View>
          <View className="page-section-demo">
            <Button data-aspm-click="xxx">辅助操作 Normal</Button>
            <Button disabled>辅助操作 Disable</Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">type-warn</View>
          <View className="page-section-demo">
            <Button type="warn">警告类操作 Normal</Button>
            <Button type="warn" disabled>
              警告类操作 Disable
            </Button>
            <Button type="warn" hover-className="red">
              hover-red
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">Size</View>
          <View className="page-section-demo">
            <Button size="mini" loading>
              提交
            </Button>
            <Button style="margin-left: 10px;" type="primary" size="mini">
              选项
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">open</View>
          <View className="page-section-demo">
            <Button open-type="share">share</Button>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">Form</View>
          <View className="page-section-demo">
            <Form onSubmit={this.onSubmit} onReset={this.onReset}>
              <Button form-type="submit" type="primary">
                submit
              </Button>
              <Button form-type="reset">reset</Button>
            </Form>
          </View>
        </View>
      </View>
    );
  }
}
