/**
 * declare 用法
 */

export default function () {
  jme.storage.getStorage();
  // Math.round()
}

declare global {
  interface Array<T> {
    /**
     * 获取`sourceData`数组第`0`个对象key对应的value值，取不到就取传入的`subValue`
     * @param key `sourceData`数组对象的`key`
     * @param subValue 替补值
     */
    getSourceDataValue(key: keyof T, subValue?: any): any;
  }

  /**
   * 在其他文件下也可以使用
   */
}
