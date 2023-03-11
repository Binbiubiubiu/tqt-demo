let deviceAPIList = [
  {
    name: "获取手机网络状态",
    path: "/page/API/get-network-type/get-network-type",
  },
  {
    name: "获取手机系统信息",
    path: "/page/API/get-system-info/get-system-info",
  },
  {
    name: "振动",
    path: "/page/API/vibrate/vibrate",
  },
  {
    name: "剪贴板",
    path: "/page/API/clipboard/clipboard",
  },
];

if (my.ap) {
  deviceAPIList = deviceAPIList.concat([
    {
      name: "获取基础版本库",
      path: "/page/API/sdk-version/sdk-version",
    },
    {
      name: "屏幕亮度",
      path: "/page/API/screen/screen",
    },
    {
      name: "摇一摇",
      path: "/page/API/watch-shake/watch-shake",
    },
    {
      name: "拨打电话",
      path: "/page/API/make-phone-call/make-phone-call",
    },
    {
      name: "用户截屏事件",
      path: "/page/API/user-capture-screen/user-capture-screen",
    },
    {
      name: "获取服务器时间",
      path: "/page/API/get-server-time/get-server-time",
    },
    // {
    //   name: '内存不足告警',
    //   path: '/page/API/memory-warning/memory-warning',
    // },
  ]);
}

export default {
  type: "设备",
  list: deviceAPIList,
};
