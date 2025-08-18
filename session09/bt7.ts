interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// Chỉ cho phép cập nhật name, email, age
type UserUpdates = Partial<Pick<User, "name" | "email" | "age">>;

// Hàm updateUser
function updateUser(user: User, updates: UserUpdates): User {
  return {
    ...user, // copy toàn bộ dữ liệu cũ
    ...updates, // ghi đè các field được phép
  };
}

// ===== Test thử =====
const user1: User = {
  id: 1,
  name: "Huy",
  email: "huy@example.com",
  age: 20,
};

// Cập nhật tên và email
const updated1 = updateUser(user1, {
  name: "Cachiu",
  email: "cachiu@example.com",
});
console.log(updated1);
