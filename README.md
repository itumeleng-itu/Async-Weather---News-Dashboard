# Node.js API Consumption Examples

This project demonstrates different ways to consume APIs in a Node.js environment using TypeScript. It includes examples for:

*   **Callback-based API consumption:** `src/callbackVersion.ts`
*   **Promise-based API consumption:** `src/promiseVersion.ts`
*   **Async/Await-based API consumption:** `src/asyncAwaitVersion.ts`

The `src/apiConfig.ts` file likely contains common configuration for these API calls.

## Getting Started

To run these examples, ensure you have Node.js and npm installed. Then, install the project dependencies:

```bash
npm install
```

To compile the TypeScript files:

```bash
npm run build
```

## Running the Examples

Once compiled, you can run each example using Node. For instance:

```bash
node dist/callbackVersion.ts
node dist/promiseVersion.ts
node dist/asyncAwaitVersion.ts
```


