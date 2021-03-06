/**
 * Created by bsj01 on 2018/1/8.
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }//如果dom对象有calssname 直接返回

  // 获取calssname
  let newClass = el.className.split(' ')//拆开classsname
  newClass.push(className)
  el.className = newClass.join(' ')

  // 先把他拆成数组，然后push进去，然后join链接起来  完成cals的添加
}

//判断是否有class
export function hasClass(el, className) {
  //正则判断是否有calass
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  //                   calss（\表示转移） 前面是空白字符    空白自负结束
  return reg.test(el.calssName)
}
