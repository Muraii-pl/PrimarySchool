export function debouce(fn: any, ms: number) {
  let timer: any

  return function() {
    clearTimeout(timer)
    timer = setTimeout(function () {
      timer = null
      fn.apply(timer, arguments)
    }, ms)
  }
}
