import { Component, PropsWithChildren } from "react";
import { View, Picker, Image } from "@tarojs/components";

import "./picker.less";

export default class PickerExample extends Component<PropsWithChildren> {
  state = {
    array: ["中国", "美国", "巴西", "日本"],
    objectArray: [
      {
        id: 0,
        name: "美国",
      },
      {
        id: 1,
        name: "中国",
      },
      {
        id: 2,
        name: "巴西",
      },
      {
        id: 3,
        name: "日本",
      },
    ],
    arrIndex: 0,
    index: 0,
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  bindPickerChange = (e) => {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setState({
      index: e.detail.value,
    });
  };
  bindObjPickerChange = (e) => {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setState({
      arrIndex: e.detail.value,
    });
  };

  render() {
    const { index, array, objectArray, arrIndex } = this.state;
    return (
      <View className="page">
        <View className="page-description">选择器</View>
        <View className="page-section">
          <Picker onChange={this.bindPickerChange} value={index} range={array}>
            <View className="row">
              <View className="row-title">地区选择器</View>
              <View className="row-extra">当前选择：{array[index]}</View>
              <Image
                className="row-arrow"
                src="/image/arrowright.png"
                mode="aspectFill"
              />
            </View>
          </Picker>
        </View>

        <View className="page-section">
          <Picker
            onChange={this.bindObjPickerChange}
            value={arrIndex}
            range={objectArray}
            range-key="name"
          >
            <View className="row">
              <View className="row-title">ObjectArray</View>
              <View className="row-extra">
                当前选择：{objectArray[arrIndex].name}
              </View>
              <Image
                className="row-arrow"
                src="/image/arrowright.png"
                mode="aspectFill"
              />
            </View>
          </Picker>
        </View>
      </View>
    );
  }
}
