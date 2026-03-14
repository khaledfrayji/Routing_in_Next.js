'use client';

import { useState } from 'react';

// `use client` directive (above) tells Next.js this is a Client Component.
// Client Components can use browser-only features like:
// 1) React Hooks (`useState`, `useEffect`, etc.)
// 2) Event handlers (`onClick`, `onChange`, ...)
// 3) Browser APIs (`window`, `localStorage`, ...)
// Without `use client`, this file is treated as a Server Component by default.

const Counter = () => {
  // A React Hook is a special function that lets function components
  // use React features such as state and lifecycle behavior.
  //
  // `useState` returns an array with:
  // 1) current state value (`count`)
  // 2) a setter function to update that state (`setCount`)
  //
  // Generic type `<number>` is optional here, but it is good for teaching
  // and prevents accidental non-number updates in TypeScript.
  const [count, setCount] = useState<number>(0);

  // Best practice: when next state depends on previous state,
  // use the functional updater form: `setState(prev => next)`.
  // This avoids stale value bugs during rapid updates/batched renders.
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <section>
      <h1>Counter Example</h1>
      <p>Current count: {count}</p>

      <div>
        {/* Event handlers call functions that update state. */}
        <button type="button" onClick={decrement} aria-label="Decrease count">
          -1
        </button>
        <button type="button" onClick={increment} aria-label="Increase count">
          +1
        </button>
        <button type="button" onClick={reset} aria-label="Reset count">
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;