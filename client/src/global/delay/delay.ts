export function nextTick(callback: () => void, delay?: number): NodeJS.Timeout {
  return setTimeout(callback, delay);
}
