const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const validator = require("validator");
const xss = require("xss");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Lưu tạm dữ liệu contact vào mảng (demo)
const contacts = [];

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456", // Đổi thành mật khẩu MySQL của bạn
  database: "aificent", // Đổi thành tên database của bạn
});

db.connect((err) => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err);
  } else {
    console.log("Kết nối MySQL thành công!");
  }
});

app.post("/contact", (req, res) => {
  let { name, email, message } = req.body;
  // Validate
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Vui lòng nhập đầy đủ thông tin." });
  }
  if (!validator.isLength(name, { min: 2, max: 100 })) {
    return res.status(400).json({ error: "Tên phải từ 2-100 ký tự." });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email không hợp lệ." });
  }
  if (!validator.isLength(message, { min: 5, max: 2000 })) {
    return res.status(400).json({ error: "Nội dung phải từ 5-2000 ký tự." });
  }
  // Sanitize
  name = xss(validator.escape(name));
  email = xss(validator.normalizeEmail(email));
  message = xss(validator.escape(message));
  const createdAt = new Date();
  const sql =
    "INSERT INTO contact (name, email, message, createdAt) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, message, createdAt], (err, result) => {
    if (err) {
      console.error("Lỗi khi lưu vào MySQL:", err);
      return res
        .status(500)
        .json({ error: "Lỗi server, không lưu được liên hệ." });
    }
    res.json({ success: true, message: "Gửi liên hệ thành công!" });
    console.log("Gửi liên hệ thành công!");
  });
});

app.get("/contact", (req, res) => {
  db.query("SELECT * FROM contact ORDER BY createdAt DESC", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi server khi lấy dữ liệu." });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
