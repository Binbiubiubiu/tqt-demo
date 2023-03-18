import { Component, PropsWithChildren } from "react";
import { View, Image, ImageProps } from "@tarojs/components";

import "./image.less";

export default class ImageExample extends Component<PropsWithChildren> {
  state = {
    array: [
      {
        mode: "scaleToFill",
        text: "scaleToFill：不保持纵横比缩放图片，使图片完全适应",
      },
      {
        mode: "aspectFit",
        text: "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来",
      },
      {
        mode: "aspectFill",
        text: "aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来",
      },
      {
        mode: "widthFix",
        text: "widthFix：宽度不变，高度自动变化，保持原图宽高比不变",
      },
      {
        mode: "top",
        text: "top：不缩放图片，只显示图片的顶部区域",
      },
      {
        mode: "bottom",
        text: "bottom：不缩放图片，只显示图片的底部区域",
      },
      {
        mode: "center",
        text: "center：不缩放图片，只显示图片的中间区域",
      },
      {
        mode: "left",
        text: "left：不缩放图片，只显示图片的左边区域",
      },
      {
        mode: "right",
        text: "right：不缩放图片，只显示图片的右边边区域",
      },
      {
        mode: "top left",
        text: "top left：不缩放图片，只显示图片的左上边区域",
      },
      {
        mode: "top right",
        text: "top right：不缩放图片，只显示图片的右上边区域",
      },
      {
        mode: "bottom left",
        text: "bottom left：不缩放图片，只显示图片的左下边区域",
      },
      {
        mode: "bottom right",
        text: "bottom right：不缩放图片，只显示图片的右下边区域",
      },
    ] as { mode: keyof ImageProps.Mode; text: string }[],
    src: "/image/taobao.jpg",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  imageError = (e) => {
    console.log("image 发生 error 事件，携带值为", e.detail.errMsg);
  };
  onTap = (e) => {
    console.log("image 发生 tap 事件", e);
  };
  imageLoad = (e) => {
    console.log("image 加载成功", e);
  };

  render() {
    const { array, src } = this.state;
    return (
      <View className="page">
        <View className="page-description">图片</View>
        {array.map((item) => {
          return (
            <View className="page-section" key={item.mode}>
              <View className="page-section-title">{item.text}</View>
              <View className="page-section-demo" onClick={this.onTap}>
                <Image
                  className="image"
                  data-name={item.mode}
                  onClick={this.onTap}
                  mode={item.mode}
                  src={src}
                  onError={this.imageError}
                  onLoad={this.imageLoad}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
