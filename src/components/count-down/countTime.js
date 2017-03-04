// skyline封装的倒计时函数
// endTime数据类型是字符串,格式'2000/1/1,14:10:12'
// oDay, oHour, oMinute, oSecond分别是需要插入的天数,时间,分钟.

function countTime (oDay, oHour, oMinute, oSecond, endTime) {
  var endPoint
  function fresh (oDay, oHour, oMinute, oSecond, endTime) {
    if (endPoint === 0) return
    setTimeout(function () {
      writeIn(oDay, oHour, oMinute, oSecond, endTime)
      fresh(oDay, oHour, oMinute, oSecond, endTime)
    }, 500)
  }
  function writeIn (oDay, oHour, oMinute, oSecond, endTime) {
    var dhms = getLeftTime(endTime)
    if (dhms) {
      oDay.innerHTML = dhms.d
      oHour.innerHTML = dhms.h
      oMinute.innerHTML = dhms.m
      oSecond.innerHTML = dhms.s
    } else {
      endPoint = 0
    }
  }
  function getLeftTime (endTime) {
    var end = new Date(endTime)
    var now = new Date()
    var left = parseInt((end.getTime() - now.getTime()) / 1000)
    if (left === 0) {
      return false
    } else {
      return {
        d: addZero(parseInt(left / 24 / 60 / 60)),
        h: addZero(parseInt(left / 60 / 60 % 24)),
        m: addZero(parseInt(left / 60 % 60)),
        s: addZero(parseInt(left % 60))
      }
    }
  }
  function addZero (num) {
    if (num === 0) {
      return '00'
    }
    return num < 10 ? '0' + num : num
  }
  fresh(oDay, oHour, oMinute, oSecond, endTime)
}
export {countTime}
