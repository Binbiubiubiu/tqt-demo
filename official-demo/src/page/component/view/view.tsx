import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./view.less";

export default class ViewExample extends Component<PropsWithChildren> {
  state = {
    // pageName: "component/view",
    returnIndex: false,
  };

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      returnIndex: Taro.getCurrentPages().length === 1,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  returnIndex = () => {
    Taro.switchTab({ url: "/page/tabBar/component/index" });
  };

  render() {
    const { returnIndex } = this.state;
    return (
      <View className="page">
        <View>
          {returnIndex ? (
            <Button onClick={this.returnIndex}>回到首页</Button>
          ) : null}
        </View>
        <View className="page-description">
          视图容器，相当于 web 的 div 或者 react-native 的 View。
        </View>
        <View className="page-section">
          <View className="page-section-demo">
            <View className="stream">
              <View className="post">
                <View className="postUser">
                  <View className="postUser__name">Chris</View>
                </View>
                <View className="postBody">
                  <View className="postBody__content">
                    欢迎使用淘宝商家应用！！！
                  </View>
                  <View className="postBody__date">May 20</View>
                </View>
              </View>

              <View className="post">
                <View className="postUser">
                  <View className="postUser__name">Jack</View>
                </View>
                <View className="postBody">
                  <View className="postBody__content">
                    @Chris 我该如何上手？
                  </View>
                  <View className="postBody__date">May 21</View>
                </View>
              </View>

              <View className="post">
                <View className="postUser">
                  <View className="postUser__name">Chris</View>
                </View>
                <View className="postBody">
                  <View className="postBody__content">
                    你可以查看 Demo，对商家应用有一个简单的了解；然后下载我们的
                    IDE 进行开发。
                  </View>
                  <View className="postBody__date">May 22</View>
                </View>
              </View>

              <View className="post">
                <View className="postUser">
                  <View className="postUser__name">Jessie</View>
                </View>
                <View className="postBody" hover-className="red">
                  <View className="postBody__content">赞!</View>
                  <View className="postBody__date" hidden>
                    June 1
                  </View>
                </View>
              </View>

              <View className="post" hidden>
                <View className="postUser">
                  <View className="postUser__name">Jessie</View>
                </View>
                <View className="postBody">
                  <View className="postBody__content">赞! +1</View>
                  <View className="postBody__date">June 1</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
