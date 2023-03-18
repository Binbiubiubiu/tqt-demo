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


declare namespace Taro {
  interface TaroStatic{

    cloud: import("@tbmp/mp-cloud-sdk").Cloud;

    env: {
      [key: string]: string | undefined
      /** 框架 */
      FRAMEWORK: 'react' | 'preact' | 'nerv' | 'vue' | 'vue3'
      /** Taro 环境变量 */
      TARO_ENV: 'weapp' | 'h5' | 'rn' | 'swan' | 'alipay' | 'tt' | 'qq' | 'jd' | 'quickapp' | 'tb'
      /** 文件系统中的用户目录路径 (本地路径) */
      USER_DATA_PATH?: string
    }
  }
}


declare module "@tarojs/components" {
  export * from "@tarojs/components/types/index";
  import { ComponentType,PropsWithChildren } from "react";
  import { SlotProps  } from "@tarojs/components/types/Slot";

  export const Slot: ComponentType<PropsWithChildren<SlotProps>>;
}



