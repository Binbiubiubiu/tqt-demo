import { Component, PropsWithChildren } from "react";
import { View, Button, Input, Label, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./input.less";

export default class InputExample extends Component<PropsWithChildren> {
  state = {
    focus: false,
    inputValue: "",
    search: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  bindButtonClick = () => {
    // blur 事件和这个冲突
    setTimeout(() => {
      this.onFocus();
    }, 100);
  };
  onFocus = () => {
    this.setState({
      focus: true,
    });
  };
  onBlur = () => {
    this.setState({
      focus: false,
    });
  };

  bindKeyInput = (e) => {
    this.setState({
      inputValue: e.detail.value,
    });
  };

  bindHideKeyboard = (e) => {
    if (e.detail.value === "123") {
      // 收起键盘
      Taro.hideKeyboard();
    }
  };

  handleSearch = (e) => {
    console.log("search", e.detail.value);
    this.setState({
      search: e.detail.value,
    });
  };
  doneSearch = () => {
    console.log("doneSearch", this.state.search);
    Taro.hideKeyboard();
  };
  clearSearch = () => {
    console.log("clear search", this.state.search);
    this.setState({
      search: "",
    });
  };

  render() {
    const { focus, inputValue, search = "" } = this.state;
    return (
      <View className="page">
        <View className="page-description">输入框</View>
        <View className="page-section">
          <View className="form-row">
            <View className="form-row-Label">受控聚焦</View>
            <View className="form-row-content">
              <Input
                className="input"
                focus={focus}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                placeholder="input something"
              />
            </View>
          </View>
          <View className="page-section-btns">
            <Button size="mini" onClick={this.bindButtonClick}>
              聚焦
            </Button>
          </View>
        </View>
        <View className="page-section">
          <View className="form-row">
            <View className="form-row-Label">
              <Label for="controlled">显示输入</Label>
            </View>
            <View className="form-row-content">
              <Input
                className="input"
                id="controlled"
                onInput={this.bindKeyInput}
                placeholder="show input content"
              />
            </View>
          </View>
          <View className="extra-info">你输入的是：{inputValue}</View>
        </View>
        <View className="page-section">
          <View className="form-row">
            <View className="form-row-Label">最大长度</View>
            <View className="form-row-content">
              <Input
                className="input"
                maxlength={10}
                placeholder="maxlength 10"
              />
            </View>
          </View>
          <View className="form-line" />
          <View className="form-row">
            <View className="form-row-Label">收起键盘</View>
            <View className="form-row-content">
              <Input
                className="input"
                onInput={this.bindHideKeyboard}
                placeholder="输入 123 自动收起键盘"
              />
            </View>
          </View>
          <View className="form-line" />
          <View className="form-row">
            <View className="form-row-Label">输入密码</View>
            <View className="form-row-content">
              <Input
                className="input"
                password
                type="text"
                placeholder="密码输入框"
              />
            </View>
          </View>
          <View className="form-line" />
          <View className="form-row">
            <View className="form-row-Label">输入数字</View>
            <View className="form-row-content">
              <Input className="input" type="number" placeholder="数字输入框" />
            </View>
          </View>
          <View className="form-line" />
          <View className="form-row">
            <View className="form-row-Label">小数点键盘</View>
            <View className="form-row-content">
              <Input
                className="input"
                type="digit"
                placeholder="带小数点的数字键盘"
              />
            </View>
          </View>
          <View className="form-line" />
          <View className="form-row">
            <View className="form-row-Label">身份证键盘</View>
            <View className="form-row-content">
              <Input
                className="input"
                type="idcardpad"
                placeholder="身份证输入键盘"
              />
            </View>
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">搜索框</View>
          <View className="page-section-demo">
            <View className="search-outer">
              <Input
                className="search-input"
                placeholder="搜索"
                value={search}
                onConfirm={this.doneSearch}
                onInput={this.handleSearch}
              />
              <Text className="search-cancel" onClick={this.clearSearch}>
                取消
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
