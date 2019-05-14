/**
 * 恢复page url
 * @param {String} url
 */
export function decodePageUrl(url) {
  return url.replace(/@x@/g, ':').replace(/@@/g, '&').replace(/@y@/g, '?').replace(/@z@/g, '=').replace(/@w@/g, '#/')
}

/**
   * 将时间对象格式化为指定的格式
   *
   * @export
   * @param {object} dateObject 日期对象
   * @param {string} fmt 格式化模板，形如：'yyyy-MM-dd EEE hh:mm:ss.S' | 'yyyy-M-d EE h:m:s.S'
   * @returns 格式化后的日期，形如：'2018-05-02 星期三 08:09:04.396' | '2018-5-2 周三 8:9:4.396'
   */
export function formatDate(dateObject, fmt) {
    var o = {
      'M+': dateObject.getMonth() + 1, // 月份
      'd+': dateObject.getDate(), // 日
      'h+': dateObject.getHours(), // 小时
      'm+': dateObject.getMinutes(), // 分
      's+': dateObject.getSeconds(), // 秒
      'q+': Math.floor((dateObject.getMonth() + 3) / 3), // 季度
      S: dateObject.getMilliseconds() // 毫秒
    }
    var week = {
      0: '日',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六'
    }
    var date = fmt
    if (/(y+)/.test(date)) {
      date = date.replace(RegExp.$1, ('' + dateObject.getFullYear()).substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(date)) {
      var weekPrefix = ''
      if (RegExp.$1.length > 2) {
        weekPrefix = '星期'
      } else if (RegExp.$1.length > 1) {
        weekPrefix = '周'
      }
      date = date.replace(RegExp.$1, weekPrefix + week['' + dateObject.getDay()])
    }
    for (var key in o) {
      var value = o[key]
      if (new RegExp('' + key).test(date)) {
        date = date.replace(RegExp.$1, (RegExp.$1.length === 1) ? (value) : (('00' + value).substr(('' + value).length)))
      }
    }
    return date
  }