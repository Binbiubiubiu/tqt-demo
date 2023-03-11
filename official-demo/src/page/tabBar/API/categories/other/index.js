


let otherAPIList = [
    {
      name: '缓存',
      path: '/page/API/storage/storage',
    },
    {
      name: '扫码 Scan',
      path: '/page/API/scan-code/scan-code',
    },
    // {
    //   name: '自定义分享',
    //   path: '/page/API/share/share',
    // },
  ];
  
  if (my.ap) {
    otherAPIList = otherAPIList.concat([
      {
        name: '文件',
        path: '/page/API/file/file',
      },
      // {
      //   name: '蓝牙',
      //   path: '/page/API/bluetooth/bluetooth',
      // },
      // {
      //   name: '数据安全',
      //   path: '/page/API/rsa/rsa',
      // },
      // {
      //   name: '自定义分析',
      //   path: '/page/API/report-analytics/report-analytics',
      // },
    ]);
  
    if (my.canIUse('on')) {
      otherAPIList = otherAPIList.concat([
        // {
        //   name: '容器事件',
        //   path: '/page/API/events/events',
        // },
      ]);
    }
  
    if (my.canIUse('ocr')) {
      otherAPIList = otherAPIList.concat([
        // {
        //   name: 'OCR',
        //   path: '/page/API/ocr/ocr',
        // },
      ]);
    }
  }

export default {
    type: '其他',
    list: otherAPIList,
  }