export default defineAppConfig({
  pages: [
    "page/tabBar/component/index",
    "page/tabBar/API/index",
    "page/common/search/search",
  ],
  window: {
    enableWK: "YES",
    enableDSL: true,
    navigationBarTitleText: "商家应用",
    backgroundColor: "#F5F5F9",
    pullRefresh: true,
    allowsBounceVertical: "YES",
    navigationBarBackgroundColor: "#000",
    showNavigationBarLogo: false,
    navigationBarForceEnable: true,
    gpuAccelerate: "true",
    enableSkia: "true",
  },
  subPackages: [
    {
      root: "page/API",
      pages: [
        "events/events",
        "share/share",
        "action-sheet/action-sheet",
        "alert/alert",
        "animation/animation",
        "canvas/canvas",
        // "card-pack/card-pack",
        "choose-city/choose-city",
        "choose-location/choose-location",
        "confirm/confirm",
        // "contact/contact",
        "date-picker/date-picker",
        // "option-menu/option-menu",
        "download-file/download-file",
        "file/file",
        // "ocr/ocr",
        // "ocr-idcard-face/ocr-idcard-face",
        // "ocr-business-card/ocr-business-card",
        // "ocr-vehicle/ocr-vehicle",
        // "ocr-driver-license/ocr-driver-license",
        // "ocr-business-license/ocr-business-license",
        // "ocr-bank-card/ocr-bank-card",
        // "ocr-train-ticket/ocr-train-ticket",
        // "ocr-passport/ocr-passport",
        // "ocr-general/ocr-general",
        // "ocr-vehicle-plate/ocr-vehicle-plate",
        // "ocr-vin/ocr-vin",
        "get-auth-code/get-auth-code",
        "get-location/get-location",
        "get-network-type/get-network-type",
        "get-system-info/get-system-info",
        "get-server-time/get-server-time",
        "get-user-info/get-user-info",
        "get-image-info/get-image-info",
        "image/image",
        "keyboard/keyboard",
        "loading/loading",
        "make-phone-call/make-phone-call",
        "memory-warning/memory-warning",
        "multi-level-select/multi-level-select",
        "options-select/options-select",
        // "navigation-bar-loading/navigation-bar-loading",
        "navigator/navigator",
        "open-location/open-location",
        "pull-down-refresh/pull-down-refresh",
        // "pay-sign-center/pay-sign-center",
        "request/request",
        // "request-payment/request-payment",
        "scan-code/scan-code",
        "set-navigation-bar/set-navigation-bar",
        "show-auth-guide/show-auth-guide",
        "storage/storage",
        "toast/toast",
        "upload-file/upload-file",
        "vibrate/vibrate",
        "watch-shake/watch-shake",
        "clipboard/clipboard",
        "bluetooth/bluetooth",
        "rsa/rsa",
        "page-scroll-to/page-scroll-to",
        "websocket/websocket",
        // "zm-credit-borrow/zm-credit-borrow",
        "create-selector-query/create-selector-query",
        "sdk-version/sdk-version",
        "user-capture-screen/user-capture-screen",
        "screen/screen",
        "compress-image/compress-image",
        "report-analytics/report-analytics",
        "text-risk-identification/text-risk-identification",
        "create-inner-audiocontext/create-inner-audiocontext",
        // "get-background-audio-manager/get-background-audio-manager",
        // "generate-image-from-code/generate-image-from-code",
        // "get-title-color/get-title-color",
      ],
    },
    {
      root: "page/component",
      pages: [
        // "button/button",
        // "canvas/canvas",
        // "checkbox/checkbox",
        // "form/form",
        // "icon/icon",
        // "image/image",
        // "input/input",
        // "label/label",
        // "map/map",
        // "navigator/navigate",
        // "navigator/redirect",
        // "navigator/reLaunch",
        // "navigator/navigator",
        // "picker/picker",
        // "picker-view/picker-view",
        // "progress/progress",
        // "radio/radio",
        // "scroll-view/scroll-view",
        // "slider/slider",
        // "swiper/swiper",
        // "switch/switch",
        // "text/text",
        // "textarea/textarea",
        // "view/view",
        // "lifestyle/lifestyle",
        // "contact-button/contact-button",
        // "webview/webview",
        // "cover-view/cover-view",
        // "movable-view/movable-view",
        // "list/list",
        // "tabs/tabs",
        // "card/card",
        // "vtabs/vtabs",
        // "grid/grid",
        // "steps/steps",
        // "footer/footer",
        // "favorite/favorite",
        // "popover/popover",
        // "modal/modal",
        // "popup/popup",
        // "filter/filter",
        // "page-result/page-result",
        // "message/message",
        // "tips/tips",
        // "notice/notice",
        // "swipe-action/swipe-action",
        // "amount-input/amount-input",
        // "badge/badge",
        // "search-bar/search-bar",
        // "calendar/calendar",
        // "stepper/stepper",
        // "input-item/input-item",
        // "am-checkbox/am-checkbox",
        // "video/video",
        // "am-icon/am-icon",
        // "flex/flex",
        // "rich-text/rich-text",
        // "ar/index/index",
        // "ar/marker/marker",
        // "ar/IMT/IMT",
        // "ar/OT/OT",
        // "ar/worldTracking/worldTracking",
        // "ar/faceDetection2D/faceDetection2D",
        // "ar/handDetection/handDetection",
        // "ar/bodyDetection/bodyDetection",
      ],
    },
  ],
  tabBar: {
    color: "#404040",
    selectedColor: "#ff5500",
    backgroundColor: "#F5F5F9",
    list: [
      {
        pagePath: "page/tabBar/component/index",
        iconPath: "image/component.png",
        selectedIconPath: "image/component_filled.png",
        text: "组件",
      },
      {
        pagePath: "page/tabBar/API/index",
        iconPath: "image/api.png",
        selectedIconPath: "image/api_filled.png",
        text: "API",
      },
    ],
  },
});
