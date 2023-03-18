import { Component, PropsWithChildren } from "react";
import { View, Map, MapProps } from "@tarojs/components";
import Taro from "@tarojs/taro";

const markers: MapProps.marker[] = [
  {
    id: 0,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath: "/image/mark_bs.png",
    callout: {
      content: "callout",
    } as MapProps.callout,
  },
];

const animMarker = [
  {
    id: 1,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,

    iconPath: "/image/mark_bs.png",

    fixedPoint: {
      originX: 200,
      originY: 150,
    },
    markerLevel: 2,
  },
];

const labelMarker = [
  {
    id: 2,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath: "/image/mark_bs.png",
    label: {
      content: "Hello Label",
      color: "#00FF00",
      fontSize: 14,
      borderRadius: 3,
      bgColor: "#ffffff",
      padding: 10,
    },
    markerLevel: 2,
  },
];
const customCalloutMarker = [
  {
    id: 3,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconPath: "/image/mark_bs.png",
    customCallout: {
      type: 2,
      descList: [
        {
          desc: "预计",
          descColor: "#333333",
        },
        {
          desc: "5分钟",
          descColor: "#ff5500",
        },
        {
          desc: "到达",
          descColor: "#333333",
        },
      ],
      isShow: 1,
    },
    markerLevel: 2,
  },
];

const iconAppendStrMarker = [
  {
    id: 34,
    latitude: 30.266786,
    longitude: 120.10675,
    width: 19,
    height: 31,
    iconAppendStr: "iconAppendStr",
    markerLevel: 2,
  },
];

var myTrafficEnabled = 0;
var myCompassEnabled = 0;
var myScaleEnabled = 0;
var myGestureEnabled = 0;

const longitude = 120.10675;
const latitude = 30.266786;
const includePoints = [
  {
    latitude: 30.266786,
    longitude: 120.10675,
  },
];

export default class MapExample extends Component<PropsWithChildren> {
  state = {
    scale: 14,
    longitude,
    latitude,
    includePoints,
    "ground-overlays": [],
    circles: [],
    polygon: [],
    polyline: [],
  };

  componentWillMount() {}

  componentDidMount() {
    // 使用 Taro.createMapContext 获取 map 上下文
    this.mapCtx = Taro.createMapContext("map");
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  mapCtx: any;

  demoResetMap = () => {
    this.setState({
      scale: 14,
      longitude,
      latitude,
      includePoints,
      "ground-overlays": [],
      circles: [],
      polygon: [],
      polyline: [],
    });
    this.mapCtx.clearRoute();
  };
  demoGetCenterLocation = () => {
    this.mapCtx.getCenterLocation({
      success: (res) => {
        Taro.showModal({
          content:
            "longitude:" +
            res.longitude +
            "\nlatitude:" +
            res.latitude +
            "\nscale:" +
            res.scale,
          showCancel: false,
        });
        console.log(res.longitude);
        console.log(res.latitude);
        console.log(res.scale);
      },
    });
  };
  demoMoveToLocation = () => {
    this.mapCtx.moveToLocation();
  };
  demoMarkerAnimation = () => {
    if (!Taro.canIUse("createMapContext.return.updateComponents")) {
      Taro.showModal({
        title: "客户端版本过低",
        content: "this.mapCtx.updateComponents 需要 10.1.35 及以上版本",
        showCancel: false,
      });
      return;
    }
    this.mapCtx.updateComponents({
      markers: animMarker,
    });
    this.mapCtx.updateComponents({
      command: {
        markerAnim: [{ markerId: 1, type: 0 }],
      },
    });
  };
  demoMarkerLabel = () => {
    if (!Taro.canIUse("createMapContext.return.updateComponents")) {
      Taro.showModal({
        title: "客户端版本过低",
        content: "this.mapCtx.updateComponents 需要 10.1.35 及以上版本",
        showCancel: false,
      });
      return;
    }
    this.mapCtx.updateComponents({
      scale: 14,
      longitude,
      latitude,
      includePoints,
      markers: labelMarker,
    });
  };
  demoMarkerCustomCallout = () => {
    this.mapCtx.updateComponents({
      scale: 14,
      longitude,
      latitude,
      includePoints,
      markers: customCalloutMarker,
    });
  };
  demoMarkerAppendStr = () => {
    this.mapCtx.updateComponents({
      scale: 14,
      longitude,
      latitude,
      includePoints,
      markers: iconAppendStrMarker,
    });
  };
  demoTrafficOverlay = () => {
    if (!Taro.canIUse("createMapContext.return.updateComponents")) {
      Taro.showModal({
        title: "客户端版本过低",
        content: "this.mapCtx.updateComponents 需要 10.1.35 及以上版本",
        showCancel: false,
      });
      return;
    }
    myTrafficEnabled = (myTrafficEnabled + 1) % 2;
    this.mapCtx.updateComponents({
      setting: { trafficEnabled: myTrafficEnabled },
    });
  };
  demoShowRoute = () => {
    this.mapCtx.showRoute({
      startLat: 30.257839,
      startLng: 120.062726,
      endLat: 30.256718,
      endLng: 120.059985,
      zIndex: 4,
      routeColor: "#FFB90F",
      iconPath: "/image/map_alr.png",
      iconWidth: 10,
      routeWidth: 10,
    });
  };
  demoCompass = () => {
    myCompassEnabled = (myCompassEnabled + 1) % 2;
    this.mapCtx.showsCompass({ isShowsCompass: myCompassEnabled });
  };
  demoScale = () => {
    myScaleEnabled = (myScaleEnabled + 1) % 2;
    this.mapCtx.showsScale({ isShowsScale: myScaleEnabled });
  };
  demoGesture = () => {
    myGestureEnabled = (myGestureEnabled + 1) % 2;
    this.mapCtx.gestureEnable({ isGestureEnable: myGestureEnabled });
  };
  demoPolyline = () => {
    this.setState({
      scale: 16,
      longitude,
      latitude,
      polyline: [
        {
          points: [
            {
              // 右上
              latitude: 30.264786,
              longitude: 120.10775,
            },
            {
              // 左下
              latitude: 30.268786,
              longitude: 120.10575,
            },
          ],
          color: "#FF0000DD",
          width: 10,
          dottedLine: false,
          iconPath: "/image/map_alr.png",
          iconWidth: 10,
        },
      ],
    });
  };
  demoPolygon = () => {
    this.setState({
      scale: 16,
      longitude,
      latitude,
      polygon: [
        {
          points: [
            {
              // 右上
              latitude: 30.264786,
              longitude: 120.10775,
            },
            {
              // 右下
              latitude: 30.268786,
              longitude: 120.10775,
            },
            {
              // 左下
              latitude: 30.268786,
              longitude: 120.10575,
            },
            {
              // 左上
              latitude: 30.264786,
              longitude: 120.10575,
            },
          ],
          fillColor: "#BB0000DD",
          width: 5,
        },
      ],
    });
  };
  demoCircle = () => {
    this.setState({
      scale: 16,
      longitude,
      latitude,
      circles: [
        {
          longitude,
          latitude,
          color: "#BB76FF88",
          fillColor: "#BB76FF33",
          radius: 100,
          strokeWidth: 3,
        },
      ],
    });
  };
  regionchange = (e) => {
    console.log("regionchange", e);
  };
  markertap = (e) => {
    console.log("marker tap", e);
  };
  controltap = (e) => {
    console.log("control tap", e);
  };
  tap = () => {
    console.log("tap");
  };
  callouttap = (e) => {
    console.log("callout tap", e);
  };

  render() {
    const {
      scale,
      longitude: longitude1,
      latitude: latitude1,
      includePoints: includePoints1,
      polyline: polyline1,
      polygon: polygon1,
      circles: circles1,
    } = this.state;
    return (
      <View className="page">
        真机调试
        <View className="page-section">
          <View className="page-section-demo">
            <Map
              id="map"
              longitude={longitude1}
              latitude={latitude1}
              scale={scale}
              onControlTap={this.controltap}
              markers={markers}
              onMarkerTap={this.markertap}
              polyline={polyline1}
              polygon={polygon1}
              circles={circles1}
              onRegionChange={this.regionchange}
              onClick={this.tap}
              onCalloutTap={this.callouttap}
              show-location
              style="width: 100%; height: 200px;"
              include-points={includePoints1}
              ground-overlays={this.state["ground-overlays"]}
            />
          </View>
        </View>
        <View className="page-section-btns">
          <View onClick={this.demoResetMap}>恢复</View>
          <View onClick={this.demoGetCenterLocation}>获取中心点坐标</View>
          <View onClick={this.demoMoveToLocation}>回到定位点</View>
        </View>
        <View className="page-section-btns">
          <View onClick={this.demoMarkerAnimation}>Marker 动画</View>
          <View onClick={this.demoMarkerLabel}>Label</View>
          <View onClick={this.demoMarkerCustomCallout}>CustomCallout</View>
        </View>
        <View className="page-section-btns">
          <View onClick={this.demoMarkerAppendStr}>文字Marker</View>
          <View onClick={this.demoTrafficOverlay}>路况展示</View>
          <View onClick={this.demoShowRoute}>步行路线规划</View>
        </View>
        <View className="page-section-btns">
          <View onClick={this.demoCompass}>指南针</View>
          <View onClick={this.demoScale}>比例尺</View>
          <View onClick={this.demoGesture}>手势</View>
        </View>
        <View className="page-section-btns">
          <View onClick={this.demoPolyline}>线</View>
          <View onClick={this.demoPolygon}>多边形</View>
          <View onClick={this.demoCircle}>圆</View>
        </View>
        <View className="page-section-btns"></View>
      </View>
    );
  }
}
