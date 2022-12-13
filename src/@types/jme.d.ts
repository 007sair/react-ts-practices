/**
 * 伪代码，京ME SDK
 */

// import type { DefaultTheme } from "styled-components";
// type DefaultTheme = import("styled-components").DefaultTheme;

interface JMDStorage {
  setStorage: (params: { key: string; value: unknown }) => void;
  getStorage: (params?: { key: string }) => any;
}

interface JMDDevice {
  getDeviceInfo: () => {
    version: string;
    token: string;
    model: string;
    screen: { width: number; height: number };
    systemName: string;
  };
}

type JME = {
  storage: JMDStorage;
  device: JMDDevice;
};

/**
 * SDK暴露的京ME全局对象
 */
declare var jme: JME;

//-----------------------------------------

// declare namespace jme {
//   const storage: JMDStorage;
//   const device: JMDDevice;
// }
