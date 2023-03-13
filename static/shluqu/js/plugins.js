/*
	Theme Name: shluqu
	Theme URI: about.shluqu.cn
	Description:豆丁科技帮助企业定制上云方案，云计算改变了孤立的市场信息，可利用大数据计算挖掘信息中的商机，帮助企业更早地托管网站，定制企业网站，建立企业互联网营销方案。
	Version: 5.6.2
	Author: 豆丁科技
	Author: about.shluqu.cn

*/
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
