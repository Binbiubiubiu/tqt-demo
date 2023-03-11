import { Component, PropsWithChildren } from "react";
import { View,Canvas,ScrollView,Button} from "@tarojs/components";
import Taro from "@tarojs/taro";
import example from './example.js';
import "./canvas.less";

let imageData;

export default class CanvasExample extends Component<PropsWithChildren> {

  state = {
    methods: [] as string[]
  }

  componentWillMount() {
    var methods = Object.keys(example);
    this.setState({
      methods: methods,
    });

    var that = this;
    methods.forEach((method)=> {
      that[method] = ()=> {
        example[method](that.context,that.c);
        that.context.draw();
      };
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  context: any
  c:any

  canvasOnReady= async ()=>{

   const c = this.c = await Taro.createCanvas({id:'canvas'});
   this.context = c.getContext('2d');
   this.context.scale(2,2)
   console.log(this.context)
  }

  log=(e)=> {
    console.log('canvas', e);
  }
  toTempFilePath=()=> {
    this.c.toTempFilePath({
      success(res) {
        Taro.previewImage({
          urls: [res.apFilePath],
        });
      },
      fail(res) {
        Taro.showModal({
          title: 'toTempFilePath',
          content: `error: ${res.error}`,
          showCancel:false,
        });
      },
    });
  }
  getImageData=()=> {
    this.context.fillStyle = 'red'
    this.context.fillRect(10, 10, 150, 100)
    this.context.draw(false)
    const res = this.context.getImageData(0,0,100,100)
    console.log(res.width); // 100
    console.log(res.height); // 100
    console.log(res.data instanceof Uint8ClampedArray); // true
    console.log(res.data.length); // 100 * 100 * 4
    imageData = res
  }

  // TODO: 截止2023年3月11日 putImageData 不支持,方法参数为0
  putImageData=()=> {
    this.context.clearRect(0,0,100,100);
    this.context.draw(true, () => {
      setTimeout(() => {
        const xx = this.context.putImageData(imageData,0,0,100)
        console.log('canvasPutImageData', xx)
      }, 2000)
    })
  }

  render() {
    const {methods} = this.state
    return (
      <View className="page">
      <View className="page-description">画布 API</View>
      <View className="page-section">
        <View className="page-section-title">my.createCanvas</View>
        <View className="page-section-demo">
          <Canvas className="canvas-element" id="canvas" onClick={this.log} onTouchStart={this.log} onReady={this.canvasOnReady}></Canvas>
        </View>
        <ScrollView className="canvas-buttons" scroll-y>
          {methods.map((method)=>{
            return (<Button key={method} className="canvas-button" type="primary" onClick={this[method]}>{method}</Button>)
          })}

        </ScrollView>
        <ScrollView className="canvas-buttons" scroll-y="true" style="height: 150rpx;">
          <Button className="canvas-button" type="primary" onClick={this.toTempFilePath}>toTempFilePath</Button>
          <Button className="canvas-button" type="primary" onClick={this.getImageData}>getImageData</Button>
          <Button className="canvas-button" type="primary" onClick={this.putImageData}>putImageData</Button>
        </ScrollView>
      </View>
    </View>
    );
  }
}
