import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class DatePicker extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  datePicker = async () => {
    const res = await Taro.datePicker({
      currentDate: "2016-10-10",
      startDate: "2016-10-9",
      endDate: "2017-10-9",
    });
    Taro.showModal({
      title: "datePicker response: " + JSON.stringify(res),
      showCancel: true,
    });
  };
  datePickerHMS = async () => {
    const res = await Taro.datePicker({
      format: "HH:mm:ss",
      currentDate: "12:12:12",
      startDate: "11:11:11",
      endDate: "13:13:13",
    });
    Taro.showModal({
      title: "datePicker response: " + JSON.stringify(res),
      showCancel: true,
    });
  };
  datePickerYMDHMS = async () => {
    const res = await Taro.datePicker({
      format: "yyyy-MM-dd HH:mm:ss",
      currentDate: "2012-01-09 11:11:11",
      startDate: "2012-01-01 11:11:11",
      endDate: "2012-01-10 11:11:11",
    });
    Taro.showModal({
      title: "datePicker response: " + JSON.stringify(res),
      showCancel: true,
    });
  };

  render() {
    return (
      <View className="page">
        <View className="page-description">选择日期 API</View>
        <View className="page-section">
          <View className="page-section-title">my.datePicker</View>
          <View className="page-section-demo">
            <Button
              className="page-body-button"
              type="primary"
              onClick={this.datePicker}
            >
              选择日期-1
            </Button>
            <Button
              className="page-body-button"
              type="primary"
              onClick={this.datePickerHMS}
            >
              选择日期-2
            </Button>
            <Button
              className="page-body-button"
              type="primary"
              onClick={this.datePickerYMDHMS}
            >
              选择日期-3
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
