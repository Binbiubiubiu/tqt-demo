let interfaceList = [
  {
    name: "警告框",
    path: "/page/API/alert/alert",
  },
  {
    name: "确认框",
    path: "/page/API/confirm/confirm",
  },
  {
    name: "弱提示",
    path: "/page/API/toast/toast",
  },
  {
    name: "加载提示",
    path: "/page/API/loading/loading",
  },
  {
    name: "操作菜单",
    path: "/page/API/action-sheet/action-sheet",
  },
  {
    name: "设置界面导航栏",
    path: "/page/API/set-navigation-bar/set-navigation-bar",
  },
  // {
  //   name: '设置optionMenu',
  //   path: '/page/API/option-menu/option-menu',
  // },
  {
    name: "页面跳转",
    path: "/page/API/navigator/navigator",
  },
  // {
  //   name: '下拉刷新',
  //   path: '/page/API/pull-down-refresh/pull-down-refresh',
  // },
  {
    name: "创建动画",
    path: "/page/API/animation/animation",
  },
  {
    name: "创建绘画",
    path: "/page/API/canvas/canvas",
  },
  {
    name: "选择日期",
    path: "/page/API/date-picker/date-picker",
  },
  {
    name: "滚动页面",
    path: "/page/API/page-scroll-to/page-scroll-to",
  },
  {
    name: "节点查询",
    path: "/page/API/create-selector-query/create-selector-query",
  },
];

if (my.ap) {
  interfaceList = interfaceList.concat([
    // {
    //   name: "联系人",
    //   path: "/page/API/contact/contact",
    // },
    // {
    //   name: '标题栏加载动画',
    //   path: '/page/API/navigation-bar-loading/navigation-bar-loading',
    // },
    {
      name: "选择城市",
      path: "/page/API/choose-city/choose-city",
    },
    {
      name: "隐藏键盘",
      path: "/page/API/keyboard/keyboard",
    },
  ]);

  if (my.canIUse("multiLevelSelect")) {
    interfaceList = interfaceList.concat([
      // {
      //   name: '级联选择',
      //   path: '/page/API/multi-level-select/multi-level-select',
      // },
    ]);
  }

  if (my.canIUse("optionsSelect")) {
    interfaceList = interfaceList.concat([
      {
        name: "选项选择器",
        path: "/page/API/options-select/options-select",
      },
    ]);
  }

  if (my.canIUse("getTitleColor")) {
    interfaceList = interfaceList.concat([
      // {
      //   name: "获取导航栏背景颜色",
      //   path: "/page/API/get-title-color/get-title-color",
      // },
    ]);
  }
}

export default {
  type: "界面",
  list: interfaceList,
};
