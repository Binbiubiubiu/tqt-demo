



let openAPIList = [
    {
      name: '获取授权码',
      path: '/page/API/get-auth-code/get-auth-code',
    },
  ];
  
  if (my.ap) {
    openAPIList = openAPIList.concat([
      {
        name: '获取用户信息',
        path: '/page/API/get-user-info/get-user-info',
      },
      {
        name: '发起支付',
        path: '/page/API/request-payment/request-payment',
      },
      {
        name: '淘宝卡包',
        path: '/page/API/card-pack/card-pack',
      },
      {
        name: '芝麻信用借还',
        path: '/page/API/zm-credit-borrow/zm-credit-borrow',
      },
    ]);
  
    if (my.canIUse('textRiskIdentification')) {
      openAPIList = openAPIList.concat([
        {
          name: '文本风险识别',
          path: '/page/API/text-risk-identification/text-risk-identification',
        },
      ]);
    }
    if (my.canIUse('generateImageFromCode')) {
      openAPIList = openAPIList.concat([
        {
          name: '生成二维码',
          path: '/page/API/generate-image-from-code/generate-image-from-code',
        },
      ]);
    }
  }

  
  export default {
    type: '开放接口',
    list: openAPIList,
  }