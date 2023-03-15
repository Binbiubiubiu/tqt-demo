import { Component, PropsWithChildren } from "react";
import { View, Textarea } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class Rsa extends Component<PropsWithChildren> {
  state = {
    inputValue: "",
    outputValue: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onInput = (e) => {
    this.setState({ inputValue: e.detail.value });
  };
  onEncrypt = () => {
    Taro.rsa({
      action: "encrypt",
      text: this.state.inputValue,
      key:
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n" +
        "GzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n" +
        "3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n" +
        "3egOO2xOKzLpYSqfbQIDAQAB",
    })
      .then((result) => {
        this.setState({ outputValue: result.text });
      })
      .catch((e) => {
        Taro.showModal({
          content: e.errorMessage || e.error,
          showCancel: false,
        });
      });
  };
  onDecrypt = () => {
    Taro.rsa({
      action: "decrypt",
      text: this.state.inputValue,
      key:
        "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n" +
        "ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n" +
        "lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n" +
        "BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n" +
        "ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n" +
        "pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n" +
        "6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n" +
        "+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n" +
        "wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n" +
        "cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n" +
        "N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n" +
        "185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n" +
        "BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=",
    })
      .then((result) => {
        this.setState({ outputValue: result.text });
      })
      .catch((e) => {
        Taro.showModal({
          content: e.errorMessage || e.error,
          showCancel: false,
        });
      });
  };

  render() {
    const { inputValue, outputValue } = this.state;
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">输入：</View>
          <View className="page-section-demo">
            <Textarea
              value={inputValue}
              maxlength={500}
              onInput={this.onInput}
            />
          </View>

          <View className="page-section-title">输出：</View>
          <View className="page-section-demo">
            <Textarea value={outputValue} maxlength={500} />
          </View>

          <View className="page-section-btns">
            <View onClick={this.onEncrypt}>加密</View>
            <View onClick={this.onDecrypt}>解密</View>
          </View>
        </View>
      </View>
    );
  }
}
