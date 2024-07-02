## Inline requires bug

A bug with inline requires and experimental import support where wrapping `export const ghQueueMicrotask = queueMicrotask;` throws a `TypeError: Illegal invocation` when invoked from an external module—only on web.

If inline requires, or experimental import support are removed, the error does not occur.

## Repro

1. Clone this repo
2. Run `npx expo install`
3. Run `npx expo start --web`

## Possible causes

I'd imagine that the issue is related to the scope binding. In `tsc` for example, the inline would have the null binding treatment, e.g. `(0, ghQueueMicrotask)()`. If you manually add this to the example, then it works as expected. Perhaps this needs to be added to the [Metro inline requires plugin](https://github.com/facebook/metro/blob/2f1801a489cc656b9cd6ff90cad0ad8d33c0decd/packages/metro-transform-plugins/src/inline-requires-plugin.js#L1).
