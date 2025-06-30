import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate dữ liệu
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Vui lòng nhập đầy đủ thông tin." }, { status: 400 });
    }
    if (typeof name !== "string" || name.length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Tên phải từ 2-100 ký tự." }, { status: 400 });
    }
    // Đơn giản hóa validate email/phone cho demo
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
    }
    if (phone.length < 8 || phone.length > 15) {
      return NextResponse.json({ error: "Số điện thoại không hợp lệ." }, { status: 400 });
    }
    if (message.length < 5 || message.length > 2000) {
      return NextResponse.json({ error: "Nội dung phải từ 5-2000 ký tự." }, { status: 400 });
    }

    // Kết nối MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 3306,
    });

    // Kiểm tra số điện thoại đã tồn tại chưa
    const [rows] = await connection.execute("SELECT id FROM contact WHERE phone = ?", [phone]);
    if ((rows as any[]).length > 0) {
      await connection.end();
      return NextResponse.json({ error: "Số điện thoại này đã được sử dụng." }, { status: 400 });
    }

    // Lưu dữ liệu
    const createdAt = new Date();
    await connection.execute(
      "INSERT INTO contact (name, email, phone, message, createdAt) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, message, createdAt]
    );
    await connection.end();

    return NextResponse.json({ success: true, message: "Gửi liên hệ thành công!" });
  } catch (err) {
    return NextResponse.json({ error: "Lỗi server, không gửi được liên hệ." }, { status: 500 });
  }
} 