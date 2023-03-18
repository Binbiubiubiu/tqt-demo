import { Component, PropsWithChildren } from "react";
import { View, RichText, RichTextProps } from "@tarojs/components";

export default class RichTextExample extends Component<PropsWithChildren> {
  state = {
    nodes: [
      {
        name: "div",
        attrs: {
          class: "wrapper",
          style: "color: orange;",
        },
        children: [
          {
            type: "text",
            text: "Hello&nbsp;World!",
          },
        ],
      },
    ] as Array<RichTextProps.Text | RichTextProps.HTMLElement> | string,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  tap = () => {
    console.log("tap");
  };

  render() {
    const { nodes } = this.state;
    return (
      <View>
        <RichText nodes={nodes} onClick={this.tap}></RichText>
      </View>
    );
  }
}
