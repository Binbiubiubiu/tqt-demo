import { Component, PropsWithChildren } from "react";
import { View, Map, CoverView, CoverImage } from "@tarojs/components";

import "./cover-view.less";

export default class CoverViewExample extends Component<PropsWithChildren> {
  state = {
    scale: 14,
    longitude: 120.10675,
    latitude: 30.266786,
    includePoints: [
      {
        latitude: 30.266786,
        longitude: 120.10675,
      },
    ],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { scale, longitude, latitude, includePoints } = this.state;
    return (
      <View className="page">
        <View className="page-description">cover-View</View>
        <View className="page-section">
          <View className="page-section-demo" style="position: relative;">
            <Map
              longitude={longitude}
              latitude={latitude}
              scale={scale}
              style="width: 100%; height: 200px;"
              include-points={includePoints}
            />
            <CoverView className="cover-View">
              <CoverView className="cover-View-item cover-View-item-1"></CoverView>
              <CoverView className="cover-View-item cover-View-item-2"></CoverView>
              <CoverView className="cover-View-item cover-View-item-3"></CoverView>
            </CoverView>
            <CoverImage style="" src="/image/ant.png" />
          </View>
        </View>
      </View>
    );
  }
}
