export default function debounce(fn:(...args:unknown[])=>void, wait:number) {
  var timeout:number;
  return function() {
    var ctx = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(ctx, args);
    }, wait);
  };
}
