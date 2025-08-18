function createObject<K extends string, V>(
  keys: K[],
  values: V[]
): Record<K, V> {
  const result = {} as Record<K, V>;
  const len = Math.min(keys.length, values.length);

  for (let i = 0; i < len; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}


