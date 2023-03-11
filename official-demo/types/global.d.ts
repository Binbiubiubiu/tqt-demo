/// <reference types="@tqtjs/taro-plugin-platform-tb/shims-tb" />
/// <reference types="@tarojs/taro" />


declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd"
      | "tb";
  }
}

declare module JSX {
  interface IntrinsicElements {
    "am-list": any;
    "am-list-item": any;
    "am-search-bar":any
  }
}

declare module "@tarojs/components" {
  export * from "@tarojs/components/types/index";
  import { ComponentType,PropsWithChildren } from "react";
  import { SlotProps  } from "@tarojs/components/types/Slot";

  export const Slot: ComponentType<PropsWithChildren<SlotProps>>;
}



