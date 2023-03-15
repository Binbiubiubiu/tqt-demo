import { Component, PropsWithChildren } from "react";
import { View, Button,Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./bluetooth.less";

export default class Bluetooth extends Component<PropsWithChildren> {
  state= {
    devid: '0D9C82AD-1CC0-414D-9526-119E08D28124',
    serid: 'FEE7',
    notifyId: '36F6',
    // eslint-disable-next-line react/no-unused-state
    writeId: '36F5',
    charid: '',
    // eslint-disable-next-line react/no-unused-state
    alldev: [{ deviceId: '' }],
    name: ''
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {
    this.offBLEConnectionStateChanged();
    this.offBLECharacteristicValueChange();
    this.offBluetoothAdapterStateChange();
    this.closeBluetoothAdapter();
  }

  componentDidShow() {}

  componentDidHide() {}

 //获取本机蓝牙开关状态
 openBluetoothAdapter=()=> {
  Taro.openBluetoothAdapter().then(res => {
    if (!res.isSupportBLE) {
      Taro.showModal({ content: '抱歉，您的手机蓝牙暂不可用',showCancel:false });
      return;
    }
    Taro.showModal({ content: '初始化成功！',showCancel:false });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false });
  });
}
closeBluetoothAdapter=()=> {
  Taro.closeBluetoothAdapter().then(() => {
    Taro.showModal({ content: '关闭蓝牙成功！',showCancel:false });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false });
  });
}
getBluetoothAdapterState() {
  Taro.getBluetoothAdapterState().then(res => {
    if (!res.available) {
      Taro.showModal({ content: '抱歉，您的手机蓝牙暂不可用',showCancel:false });
      return;
    }
    Taro.showModal({ content: JSON.stringify(res),showCancel:false});
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false });
  });
}
//扫描蓝牙设备
startBluetoothDevicesDiscovery=()=> {
  Taro.startBluetoothDevicesDiscovery({
    allowDuplicatesKey: false,
  }).then(()=>{
    const callback = (res:Taro.onBluetoothDeviceFound.CallbackResult) => {
      // Taro.showModal({content:'监听新设备'+JSON.stringify(res),showCancel:false });
      var deviceArray = res.devices;
      for (var i = deviceArray.length - 1; i >= 0; i--) {
        var deviceObj = deviceArray[i];
        //通过设备名称或者广播数据匹配目标设备，然后记录deviceID后面使用
        if (deviceObj.name == this.state.name) {
          Taro.showModal({ content: '目标设备被找到',showCancel:false });
          Taro.offBluetoothDeviceFound(callback);
          this.setState({
            // eslint-disable-next-line react/no-unused-state
            deviceId: deviceObj.deviceId,
          });
          break;
        }
      }
    }
    Taro.onBluetoothDeviceFound(callback);
  }).catch((error)=>{
    Taro.showModal({ content: '启动扫描失败' + JSON.stringify(error),showCancel:false });
  });
}
//停止扫描
stopBluetoothDevicesDiscovery=()=> {
  Taro.stopBluetoothDevicesDiscovery().then(()=>{
    // Taro.offBluetoothDeviceFound();
    Taro.showModal({ content: '操作成功！',showCancel:false });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false });
  });
}
//获取正在连接中的设备
getConnectedBluetoothDevices=()=> {
  Taro.getConnectedBluetoothDevices({
    // services:[]
  }).then(res => {
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有在连接中的设备！',showCancel:false });
      return;
    }
    Taro.showModal({ content: JSON.stringify(res),showCancel:false });
    this.setState({
      devid:res.devices[0].deviceId
    })

  }).catch( error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false });
  });
}

//获取所有搜索到的设备
getBluetoothDevices=()=> {
  Taro.getBluetoothDevices().then(res => {
    Taro.showModal({ content: JSON.stringify(res) ,showCancel:false });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error),showCancel:false  });
  });
}

bindKeyInput=(e)=> {
  this.setState({
    devid: e.detail.value,
  });
}

//连接设备
connectBLEDevice=()=> {
  Taro.createBLEConnection({
    deviceId: this.state.devid,
  }).then(() => {
    Taro.showModal({ content: '连接成功',showCancel:false  });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error) ,showCancel:false  });
  });
}
//断开连接
disconnectBLEDevice=() =>{
  Taro.closeBLEConnection({
    deviceId: this.state.devid,
  }).then(() => {
    Taro.showModal({ content: '断开连接成功！',showCancel:false  });
  }).catch(error => {
    Taro.showModal({ content: JSON.stringify(error) ,showCancel:false  });
  });;
}
//获取连接设备的server，必须要再连接状态状态之下才能获取
getBLEDeviceServices=()=> {
  Taro.getConnectedBluetoothDevices({
    // deviceId:""
  }).then(res => {
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有已连接的设备',showCancel:false });
      return;
    }
    Taro.getBLEDeviceServices({
      deviceId: this.state.devid,
    }).then(res1 => {
      Taro.showModal({ content: JSON.stringify(res1),showCancel:false });
      this.setState({
        serid: res1.services[0].uuid,
      });
    }).catch(error => {
      Taro.showModal({ content: JSON.stringify(error),showCancel:false });
    });
  });
}
//获取连接设备的charid，必须要再连接状态状态之下才能获取（这里分别筛选出读写特征字）
getBLEDeviceCharacteristics=()=> {
  Taro.getConnectedBluetoothDevices({
    // services: [],
  }).then((res)=>{
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有已连接的设备' ,showCancel:false});
      return;
    }
    this.setState({
      devid: res.devices[0].deviceId,
    });
    Taro.getBLEDeviceCharacteristics({
      deviceId: this.state.devid,
      serviceId: this.state.serid,
    }).then((res1)=>{
      Taro.showModal({ content: JSON.stringify(res1) });
        //特征字对象属性见文档，根据属性匹配读写特征字并记录，然后后面读写使用
        this.setState({
          charid: res1.characteristics[0].uuid,
        });
    }).catch(error => {
      Taro.showModal({ content: JSON.stringify(error) });
    });
  });
}
//读写数据
readBLECharacteristicValue=()=> {
  Taro.getConnectedBluetoothDevices({
    // services: []
  }).then(res => {
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有已连接的设备',showCancel:false });
      return;
    }
    this.setState({
      devid: res.devices[0].deviceId,
    });
    Taro.readBLECharacteristicValue({
      deviceId: this.state.devid,
      serviceId: this.state.serid,
      characteristicId: this.state.notifyId,
      //1、安卓读取服务
      // serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
      // characteristicId:'00002a38-0000-1000-8000-00805f9b34fb',
    }).then(res1 => {
      Taro.showModal({ content: JSON.stringify(res1),showCancel:false  });
    }).catch(error => {
      Taro.showModal({ content: '读取失败' + JSON.stringify(error),showCancel:false  });
    });
  },);
}

writeBLECharacteristicValue=() =>{
  Taro.getConnectedBluetoothDevices({
    // services: [],
  }).then(res => {
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有已连接的设备',showCancel:false });
      return;
    }
    this.setState({
      devid: res.devices[0].deviceId,
    });

    Taro.writeBLECharacteristicValue({
      deviceId: this.state.devid,
      serviceId: this.state.serid,
      characteristicId: this.state.charid,
      //安卓写入服务
      //serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
      //characteristicId:'00002a39-0000-1000-8000-00805f9b34fb',
      value: 'ABCD',
    }).then(() => {
      Taro.showModal({ content: '写入数据成功！',showCancel:false });
    }).catch(error => {
      Taro.showModal({ content: JSON.stringify(error),showCancel:false });
    });
  },);
}

callbackA:any;
notifyBLECharacteristicValueChange=()=> {
  Taro.getConnectedBluetoothDevices({
    // services: [],
  }).then(res => {
    if (res.devices.length === 0) {
      Taro.showModal({ content: '没有已连接的设备',showCancel:false  });
      return;
    }
    this.setState({
      devid: res.devices[0].deviceId,
    });

    Taro.notifyBLECharacteristicValueChange({
      state: true,
      deviceId: this.state.devid,
      serviceId: this.state.serid,
      characteristicId: this.state.notifyId,
      success: () => {
        this.callbackA = res1 => {
          // Taro.showModal({content: '特征值变化：'+JSON.stringify(res),showCancel:false});
          Taro.showModal({ content: '得到响应数据 = ' + res1.value ,showCancel:false});
        }
        //监听特征值变化的事件
        Taro.onBLECharacteristicValueChange(this.callbackA );
        Taro.showModal({ content: '监听成功' ,showCancel:false });
      },
      fail: error => {
        Taro.showModal({ content: '监听失败' + JSON.stringify(error) ,showCancel:false });
      },
    });
  },);
}
offBLECharacteristicValueChange=()=> {
  Taro.offBLECharacteristicValueChange(this.callbackA);
}
//其他事件
bluetoothAdapterStateChange=()=> {
  Taro.onBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
}
onBluetoothAdapterStateChange=(res)=> {
  if (res.error) {
    Taro.showModal({ content: JSON.stringify(res.error),showCancel:false });
  } else {
    Taro.showModal({ content: '本机蓝牙状态变化：' + JSON.stringify(res),showCancel:false });
  }
}
offBluetoothAdapterStateChange=()=> {
  Taro.offBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
}
getBind=(name)=> {
  if (!this[`bind${name}`]) {
    this[`bind${name}`] = this[name].bind(this);
  }
  return this[`bind${name}`];
}
BLEConnectionStateChanged=() =>{
  Taro.onBLEConnectionStateChange(this.getBind('onBLEConnectionStateChanged'));
}
onBLEConnectionStateChanged=(res) =>{
  if (res.error) {
    Taro.showModal({ content: JSON.stringify(res.error),showCancel:false });
  } else {
    Taro.showModal({ content: '连接状态变化：' + JSON.stringify(res),showCancel:false });
  }
}
offBLEConnectionStateChanged=()=> {
  Taro.offBLEConnectionStateChange(this.getBind('onBLEConnectionStateChanged'));
}

  render() {
    return (
      <View className="page">
  <View className="page-description">蓝牙 API</View>
  <View className="page-section">
    <View className="page-section-title">本机蓝牙开关状态</View>
    <View className="page-section-demo">
       <Button type="primary" onClick={this.openBluetoothAdapter}>初始化蓝牙</Button>
       <Button type="primary" onClick={this.closeBluetoothAdapter}>关闭本机蓝牙</Button>
       <Button type="primary" onClick={this.getBluetoothAdapterState}>获取蓝牙状态</Button>
    </View>

    <View className="page-section-title">扫描蓝牙设备</View>
    <View className="page-section-demo">
       <Button type="primary" onClick={this.startBluetoothDevicesDiscovery}>开始搜索</Button>
       <Button type="primary" onClick={this.getBluetoothDevices}>所有搜索到的设备</Button>
       <Button type="primary" onClick={this.getConnectedBluetoothDevices}>所有已连接的设备</Button>
       <Button type="primary" onClick={this.stopBluetoothDevicesDiscovery}>停止搜索</Button>
    </View>

    <View className="page-section-title">连接设备</View>
    <View className="page-section-demo">
       <Input className="input" onInput={this.bindKeyInput} type="text" placeholder="输入要连接的设备的deviceId"></Input>
       <Button type="primary" onClick={this.connectBLEDevice}>连接设备</Button>
       <Button type="primary" onClick={this.getBLEDeviceServices}>获取设备服务</Button>
       <Button type="primary" onClick={this.getBLEDeviceCharacteristics}>获取读写特征</Button>
       <Button type="primary" onClick={this.disconnectBLEDevice}>断开设备连接</Button>
    </View>

     <View className="page-section-title">读写数据</View>
     <View className="page-section-demo">
       <Button type="primary" onClick={this.notifyBLECharacteristicValueChange}>监听特征值数据变化</Button>
       <Button type="primary" onClick={this.readBLECharacteristicValue}>读取数据</Button>
       <Button type="primary" onClick={this.writeBLECharacteristicValue}>写入数据</Button>
       <Button type="primary" onClick={this.offBLECharacteristicValueChange}>取消特征值监听</Button>
    </View>

     <View className="page-section-title">其他事件</View>
     <View className="page-section-demo">
       <Button type="primary" onClick={this.bluetoothAdapterStateChange}>本机蓝牙状态变化</Button>
       <Button type="primary" onClick={this.offBluetoothAdapterStateChange}>取消本机蓝牙状态监听</Button>
       <Button type="primary" onClick={this.BLEConnectionStateChanged}>蓝牙连接状态变化</Button>
       <Button type="primary" onClick={this.offBLEConnectionStateChanged}>取消蓝牙连接状态监听</Button>

    </View>

  </View>
</View>
    );
  }
}
