import { Component, PropsWithChildren } from "react";
import { View, Button, Text, Slot } from "@tarojs/components";

import "./popover.less";

const position = [
  "top",
  "topRight",
  "rightTop",
  "right",
  "rightBottom",
  "bottomRight",
  "bottom",
  "bottomLeft",
  "leftBottom",
  "left",
  "leftTop",
  "topLeft",
];

export default class PopoverExample extends Component<PropsWithChildren> {
  state = {
    position: position[0],
    show: false,
    showMask: true,
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShowPopoverTap = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  onNextPositionTap = () => {
    let index = position.indexOf(this.state.position);
    index = index >= position.length - 1 ? 0 : index + 1;
    this.setState({
      show: true,
      position: position[index],
    });
  };
  onMaskChangeTap = () => {
    this.setState({
      showMask: !this.state.showMask,
    });
  };
  onMaskClick = () => {
    this.setState({
      show: false,
    });
  };
  itemTap1 = () => {
    Taro.showModal({
      content: "点击1",
      showCancel: false,
    });
  };
  itemTap2 = () => {
    Taro.showModal({
      content: "点击2",
      showCancel: false,
    });
  };

  render() {
    const { position: position1, show, showMask } = this.state;
    return (
      <>
        <View className="demo-popover">
          <popover
            position={position1}
            show={show}
            showMask={showMask}
            onMaskClick={this.onMaskClick}
          >
            <View className="demo-popover-btn" onClick={this.onShowPopoverTap}>
              点击{show ? "隐藏" : "显示"}
            </View>
            <Slot name="items">
              <popover-item onItemClick="itemTap1">
                <Text>{position1}</Text>
              </popover-item>
              <popover-item onItemClick="itemTap2">
                <Text>line2</Text>
              </popover-item>
            </Slot>
          </popover>
        </View>
        <View className="demo-popover-test-btns">
          <Button
            className="demo-popover-test-btn"
            onClick={this.onNextPositionTap}
          >
            下个位置
          </Button>
          <Button
            className="demo-popover-test-btn"
            onClick={this.onMaskChangeTap}
          >
            蒙层{showMask ? "隐藏" : "显示"}
          </Button>
        </View>
      </>
    );
  }
}
