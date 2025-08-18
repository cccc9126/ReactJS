class DataStore<T> {
  private data: T[] = [];

  // Thêm một phần tử kiểu T
  add(item: T): void {
    this.data.push(item);
  }

  // Lấy toàn bộ danh sách
  getAll(): T[] {
    return this.data;
  }

  // Xóa phần tử theo index
  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      console.error("Index không hợp lệ!");
    }
  }
}
