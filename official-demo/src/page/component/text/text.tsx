import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";

import "./text.less";

export default class TextExample extends Component<PropsWithChildren> {
  state = {
    text: `淘宝是一个大型生活服务类的平台，用户群非常广泛，上至五六十岁，下至十几岁。
    这里不仅有官方自营应用，还有第三方接入应用，用户的选择很多。
    只有你的产品做得足够简单，才能让更多的用户使用。而更多人的使用，也意味着你更大的收益。\n\n:)
  `,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { text } = this.state;
    return (
      <View className="page">
        <View className="page-description">
          <View className="text-demo-title">
            <Text className="text-demo-text">
              这是一段文本。{`\n`}
              <Text>\</Text>
              <Text>n</Text> 可以换行。
            </Text>
          </View>
        </View>
        <View className="page-section">
          <View className="page-section-demo">
            <Text>{text}</Text>
          </View>
        </View>
      </View>
    );
  }
}
