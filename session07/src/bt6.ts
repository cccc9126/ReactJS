// Lớp Account:

// Định nghĩa lớp Account cơ bản (không thay đổi từ yêu cầu trước), có các thuộc tính như id, userName, password, isLogin, và role.
// Phương thức login(), logout() như đã định nghĩa trước đó.
// Lớp userAcc:

// Kế thừa từ lớp Account.
// Thêm thuộc tính status, có thể có giá trị là active hoặc banned.
// Phương thức login() sẽ kiểm tra status và thay đổi giá trị của isLogin.
// Lớp adminAcc:

// Kế thừa từ lớp Account.
// Thêm phương thức banUser(), có tham số là id của một đối tượng được khởi tạo từ lớp userAcc. Phương thức này sẽ cập nhật thuộc tính status của đối tượng userAcc thành banned (tức là cấm người dùng đó).
class Account {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  login(): void {
    console.log("Login method should be implemented in subclass.");
  }

  logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    } else {
      console.log("Bạn đã đăng xuất trước đó.");
    }
  }
}
class UserAcc extends Account {
  private status: string;

  constructor(
    id: string,
    userName: string,
    password: string,
    role: string,
    status: string
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log(`${this.userName} đã đăng nhập thành công.`);
    } else if (this.status === "banned") {
      console.log("Tài khoản đã bị khóa.");
    } else {
      console.log("Trạng thái tài khoản không hợp lệ.");
    }
  }
}
class AdminAcc extends Account {
  constructor(id: string, userName: string, password: string, role: string) {
    super(id, userName, password, role);
  }

  banUser(user: UserAcc): void {
    user["status"] = "banned"; // Truy cập thuộc tính private status thông qua tên đối tượng
    console.log(`Người dùng ${user.userName} đã bị cấm.`);
  }
}
let user = new UserAcc("U001", "john_doe", "password123", "user", "active");
user.login(); // Đăng nhập thành công
user.logout(); // Đăng xuất thành công
user.login(); // Đăng nhập thành công
user.logout(); // Đăng xuất thành công      
let bannedUser = new UserAcc("U002", "jane_doe", "password456", "user", "banned");
bannedUser.login(); // Tài khoản đã bị khóa
bannedUser.logout(); // Bạn đã đăng xuất trước đó.
bannedUser.login(); // Tài khoản đã bị khóa
bannedUser.logout(); // Bạn đã đăng xuất trước đó.      
bannedUser.isLogin = true; // Giả lập trạng thái đăng nhập
bannedUser.logout(); // Đăng xuất thành công
bannedUser.logout(); // Bạn đã đăng xuất trước đó.



let admin = new AdminAcc("A001", "admin_user", "admin_pass", "admin");
admin.banUser(user); // Cấm người dùng John Doe
user.login(); // Tài khoản đã bị khóa
user.logout(); // Bạn đã đăng xuất trước đó.
admin.banUser(bannedUser); // Cấm người dùng Jane Doe
bannedUser.login(); // Tài khoản đã bị khóa
bannedUser.logout(); // Bạn đã đăng xuất trước đó.
bannedUser.isLogin = true; // Giả lập trạng thái đăng nhập
bannedUser.logout(); // Đăng xuất thành công
bannedUser.logout(); // Bạn đã đăng xuất trước đó.  