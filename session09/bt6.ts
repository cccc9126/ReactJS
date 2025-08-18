function firstMatch<T>(
  array: T[],
  predicate: (item: T) => boolean
): T | undefined {
  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}
