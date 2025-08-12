// Lớp Account:

// Thuộc tính:
// id: Mã tài khoản (public).
// userName: Tên người dùng (public).
// password: Mật khẩu (private).
// isLogin: Trạng thái đăng nhập (public).
// role: Vai trò người dùng (public).
// Phương thức:
// login(): Phương thức để đăng nhập, sẽ được kế thừa và ghi đè trong lớp con.
// logout(): Phương thức để đăng xuất:
// Nếu isLogin là true, thông báo "Đăng xuất thành công" và cập nhật isLogin thành false.
// Nếu isLogin là false, không làm gì cả.
// Lớp userAcc:

// Lớp con kế thừa từ lớp Account.
// Thêm thuộc tính:
// status: Trạng thái của người dùng, có thể là active hoặc banned.
// Phương thức:
// login(): Ghi đè phương thức login() từ lớp Account:
// Kiểm tra status của người dùng:
// Nếu status là active, cho phép đăng nhập và cập nhật isLogin thành true.
// Nếu status là banned, thông báo "Tài khoản đã bị khóa".
class Account{
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

    constructor(id: string, userName: string, password: string, role: string, status: string) {
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
bannedUser.login(); // Tài khoản đã bị khóa
bannedUser.isLogin = false; // Giả lập trạng thái đăng xuất
bannedUser.logout(); // Bạn đã đăng xuất trước đó.      