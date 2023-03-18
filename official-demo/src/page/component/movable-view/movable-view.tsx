import { Component, PropsWithChildren } from "react";
import { View, MovableView, MovableArea, Button } from "@tarojs/components";

import "./movable-view.less";

export default class MovableViewExample extends Component<PropsWithChildren> {
  state = {
    x: 0,
    y: 0,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onButtonTap = () => {
    const { x, y } = this.state;
    if (x === 30) {
      this.setState({
        x: x + 1,
        y: y + 1,
      });
    } else {
      this.setState({
        x: 30,
        y: 30,
      });
    }
  };

  render() {
    const { x, y } = this.state;
    return (
      <View className="page">
        <View className="page-description">可移动视图</View>
        <View className="page-section">
          <View className="page-section-title">
            movable-view区域小于movable-area
          </View>
          <View className="page-section-demo">
            <MovableArea>
              <MovableView x={x} y={y} direction="all">
                movable-view
              </MovableView>
            </MovableArea>
          </View>
          <Button
            style="margin-left: 10px; mrigin-right: 10px;"
            type="primary"
            onClick={this.onButtonTap}
          >
            点击移动到 (30px, 30px)
          </Button>
        </View>
        <View className="page-section">
          <View className="page-section-title">
            movable-view区域大于movable-area
          </View>
          <View className="page-section-demo">
            <MovableArea>
              <MovableView className="max" direction="all">
                movable-view
              </MovableView>
            </MovableArea>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">只可以横向移动</View>
          <View className="page-section-demo">
            <MovableArea>
              <MovableView direction="horizontal">movable-view</MovableView>
            </MovableArea>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-title">只可以纵向移动</View>
          <View className="page-section-demo">
            <MovableArea>
              <MovableView direction="vertical">movable-view</MovableView>
            </MovableArea>
          </View>
        </View>
      </View>
    );
  }
}
