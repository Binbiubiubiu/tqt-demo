import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from '@tarojs/taro'

export default class ActionSheet extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showActionSheet=()=> {
    Taro.showActionSheet({
      alertText: '淘宝-ActionSheet',
      itemList: ['菜单一', '菜单二', '菜单三'],
      cancelButtonText: '取消好了',
      success: (res) => {
        const btn = res.tapIndex === -1 ? '取消' : '第' + res.tapIndex + '个';
        Taro.showModal({
          title: `你点了${btn}按钮`,
        });
      },
    });
  }

  render() {
    return (
      <View className="page">
        <View className="page-description">操作菜单 API</View>
        <View className="page-section">
          <View className="page-section-title">my.showActionSheet</View>
          <View className="page-section-demo">
            <Button type="primary" onClick={this.showActionSheet}>
              显示操作菜单
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
