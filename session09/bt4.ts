function withDefault<T>(value?: T): T {
  if (value === undefined) {
    return "default" as unknown as T; // ép kiểu để hợp T
  }
  return value;
}
