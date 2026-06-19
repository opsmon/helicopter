"use client";

import { useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(readStorage<T>(key, initialValue));
  }, [initialValue, key]);

  useEffect(() => {
    writeStorage(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
