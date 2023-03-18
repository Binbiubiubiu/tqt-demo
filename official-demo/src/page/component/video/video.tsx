import { Component, PropsWithChildren } from "react";
import { View, Video } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class VideoExample extends Component<PropsWithChildren> {
  state = {
    src: "http://flv.bn.netease.com/tvmrepo/2012/7/C/7/E868IGRC7-mobile.mp4",
    //src:"https://youtu.be/J_WcqN1Hipg",
    title: "initial",
    autoplay: false,
    objectFit: "contain",
    showFullscreenBtn: false,
    showCenterPlayBtn: false,
    muted: false,
    loop: false,
  };

  componentWillMount() {}

  componentDidMount() {
    this.videoContext = Taro.createVideoContext("video");
    this.muted = this.state.muted;
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  videoContext: any;
  muted: boolean;

  onPlay = () => {
    console.log("onPlay");
    this.setState({ title: "onPlay" });
  };
  onPause = () => {
    console.log("onPause");
    this.setState({ title: "onPause" });
  };
  onEnded = () => {
    console.log("onEnded");
    this.setState({ title: "onEnded" });
  };
  onTimeUpdate = () => {
    console.log("onTimeUpdate");
    this.setState({ title: "onTimeUpdate" });
  };
  onLoading = (res) => {
    Taro.showModal({
      content: "加载中！" + JSON.stringify(res),
      showCancel: false,
    });
    console.log("onLoading");
    this.setState({ title: "onLoading" });
  };
  onStop = () => {
    console.log("onStop");
    this.setState({ title: "onStop" });
  };
  play = () => {
    this.videoContext.play();
    this.videoContext.mute(this.muted);
  };
  pause = () => {
    this.videoContext.pause();
  };
  seek = () => {
    this.videoContext.seek(15);
  };
  mute = () => {
    this.videoContext.mute(!this.muted);
    this.muted = !this.muted;
  };
  stop = () => {
    this.videoContext.stop();
    this.setState({ muted: this.muted.toString() });
  };
  playbackRate = (res) => {
    this.videoContext.playbackRate(1.5);
    Taro.showModal({
      content: "倍速播放中！" + JSON.stringify(res),
      showCancel: false,
    });
  };
  requestFullScreen = () => {
    this.videoContext.requestFullScreen({ direction: 90 });
    // setTimeout(() => { this.videoContext.exitFullScreen()},2000)
  };
  exitFullScreen = () => {
    this.videoContext.requestFullScreen();
    setTimeout(() => {
      this.videoContext.exitFullScreen();
    }, 2000);
  };
  showStatusBar = () => {
    this.videoContext.requestFullScreen();
    setTimeout(() => {
      this.videoContext.showStatusBar();
    }, 2000);
  };
  hideStatusBar = () => {
    this.videoContext.requestFullScreen();
    setTimeout(() => {
      this.videoContext.hideStatusBar();
    }, 2000);
  };

  render() {
    const {
      title,
      src,
      autoplay,
      objectFit,
      loop,
      showFullscreenBtn,
      showCenterPlayBtn,
      muted,
    } = this.state;
    return (
      <View className="video-page">
        <View className="video-contain">
          <Video
            src={src}
            className="video"
            id="video"
            poster="https://zos.alipayobjects.com/rmsportal/SSWkSLDrrgsLFDfsjzTZ.png"
            autoplay={autoplay}
            object-fit={objectFit}
            loop={loop}
            show-fullscreen-btn={showFullscreenBtn}
            show-center-play-btn={showCenterPlayBtn}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
            onTimeUpdate={this.onTimeUpdate}
            onLoading={this.onLoading}
            onStop={this.onStop}
            enableNative
            muted={muted}
          ></Video>
        </View>
        <View className="operation-item" style="background-color:lightblue">
          {title}
        </View>
        <View className="operation-item" onClick={this.play}>
          播放
        </View>
        <View className="operation-item" onClick={this.pause}>
          暂停
        </View>
        <View className="operation-item" onClick={this.seek}>
          跳到15s播放
        </View>
        <View className="operation-item" onClick={this.mute}>
          静音
        </View>
        <View className="operation-item" onClick={this.playbackRate}>
          倍速播放
        </View>
        <View className="operation-item" onClick={this.requestFullScreen}>
          全屏
        </View>
        <View className="operation-item" onClick={this.exitFullScreen}>
          退出全屏
        </View>
        <View className="operation-item" onClick={this.showStatusBar}>
          显示状态栏
        </View>
        <View className="operation-item" onClick={this.hideStatusBar}>
          隐藏状态栏
        </View>
        <View className="operation-item" onClick={this.stop}>
          停止播放
        </View>
      </View>
    );
  }
}
