import { useCallback, useState } from "react";

// Simple toggle hook that returns !value when triggered
export function useToggle(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);
  const toggle = useCallback(() => setValue((x) => !x), []);
  return [value, toggle, setValue];
}
