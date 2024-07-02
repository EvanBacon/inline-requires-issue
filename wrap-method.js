export const ghQueueMicrotask =
  typeof requestAnimationFrame === "function"
    ? requestAnimationFrame.bind(null)
    : queueMicrotask.bind(null);
