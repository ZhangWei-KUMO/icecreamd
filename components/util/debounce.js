
export default function debounce(fn, interval) {
  let isRunning = false;
  return function () {
    if (isRunning) {
      return;
    } else {
      isRunning = true;
      fn.apply(this, arguments)
      setTimeout(() => {
        isRunning = false;
      }, interval)
    }
  }
}


