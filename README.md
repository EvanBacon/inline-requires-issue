## Inline requires bug

A bug with inline requires and experimental import support where wrapping `export const ghQueueMicrotask = queueMicrotask;` throws a `TypeError: Illegal invocation` when invoked from an external module—only on web.

If inline requires, or experimental import support are removed, the error does not occur.

## Repro

1. Clone this repo
2. Run `npx expo install`
3. Run `npx expo start --web`
