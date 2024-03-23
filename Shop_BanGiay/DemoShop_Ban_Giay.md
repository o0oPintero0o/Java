Bảng cơ sở dữ liệu ![SQL](https://github.com/o0oPintero0o/Java_Web/assets/138128879/f54670fc-22bd-46d3-8e6b-01cd0d6c28a8)

Giao diện ShopBanGiay khi chạy, Giao diện được thiết kế theo HTML,CSS3, BootTrap4, JQuery, Ajax
![Screenshot 2024-03-08 150944](https://github.com/o0oPintero0o/Java_Web/assets/138128879/9d5f5a56-2932-495c-9f82-7351eb39926e)
Last Product dựa trên sản phẩm có uID lớn nhất của sản phẩm
![Screenshot 2024-03-08 151047](https://github.com/o0oPintero0o/Java_Web/assets/138128879/23cd5963-ed40-4c65-8076-9837a323b33e)
[Ajax]Sản phẩm Adidas mới nhất dựa trên cateroryID truyền vào
![Screenshot 2024-03-08 151114](https://github.com/o0oPintero0o/Java_Web/assets/138128879/d2bedf79-0b0b-4b2c-ab26-59c7e95131fc)
About Shop

![Screenshot 2024-03-08 151138](https://github.com/o0oPintero0o/Java_Web/assets/138128879/283ed7c6-86af-4743-8b44-1232c1a7e550)
Footer của Shop
![Screenshot 2024-03-08 151155](https://github.com/o0oPintero0o/Java_Web/assets/138128879/99fb8e25-83e6-425d-b6ee-c7ce0c7fa8df)
Giao diện Login
![Login](https://github.com/o0oPintero0o/Java_Web/assets/138128879/978815df-1f9b-4a74-977f-244ecdbda5d2)

Giao diện SignUp, tài khoản yêu cầu không có ký tự đặc biệt. Mật khẩu yêu cầu > 6 ký tự
![SignUp](https://github.com/o0oPintero0o/Java_Web/assets/138128879/1f2388e7-367a-442a-8514-057a3bd89620)

Tài khoản sau khi được tạo, mật khẩu sẽ được mã hóa bằng SHA-1,để bảo mật thông tin người dùng
![Account](https://github.com/o0oPintero0o/Java_Web/assets/138128879/2646d30e-f93c-4240-9987-55550463e82c)

Giao diện ForgotPassWord, sử dụng Java-Mail gửi tin nhắn về email, cài đặt mặc định mật khẩu gửi về sẽ là "tên đăng nhập + @123"
![ForgotPW](https://github.com/o0oPintero0o/Java_Web/assets/138128879/5bfb7487-b71f-4305-a534-df75d865a4c8)

Mật khẩu được gửi từ Email về
![Email_Forgot](https://github.com/o0oPintero0o/Java_Web/assets/138128879/13698a51-29ac-4224-8278-c3edeb7df5f1)

Đổi mật khẩu ![ChangePW](https://github.com/o0oPintero0o/Java_Web/assets/138128879/bf2d2010-4830-4b83-bd32-914022b41098)

Bắt buộc phải nhập mật khẩu trùng nhau, và có > 6 ký tự
![ChangePW_Finish](https://github.com/o0oPintero0o/Java_Web/assets/138128879/09f75311-afd9-4e4c-af0c-976d64bf3a69)

Giao diện khi Click vào xem Shop
![GiaoDienShop_1](https://github.com/o0oPintero0o/Java_Web/assets/138128879/03430638-e5b8-4665-9c47-16bde709c62e)

Các chức năng Search by Ajax, Seach bằng Cateory, Giá, Khoảng giá
![GiaoDien_2](https://github.com/o0oPintero0o/Java_Web/assets/138128879/c0c9f60a-2c43-47d0-824f-3986498ac4b0)
Search các khoảng giá
![GiaoDien3](https://github.com/o0oPintero0o/Java_Web/assets/138128879/c0dc5a6d-626d-4459-b82e-9d5c81d24e50)
Search theo màu sắc
![GiaoDien4](https://github.com/o0oPintero0o/Java_Web/assets/138128879/a2d10fb1-1824-4bb0-bf83-bd74791c6dae)


Khi Click Detail sản phẩm
![GiaoDienDetail](https://github.com/o0oPintero0o/Java_Web/assets/138128879/a9a7035f-1845-4cde-a340-dfb7f00903e3)

Giao diện sản phẩm đề xuất![RatelateSP](https://github.com/o0oPintero0o/Java_Web/assets/138128879/101bec62-4b40-417e-8d99-a816847582a5)

Thêm Review, dựa trên Insert CSDL bảng Review
![ReviewSP](https://github.com/o0oPintero0o/Java_Web/assets/138128879/68f4ebcf-62d8-407b-b75e-ecdc78526254)
Add to Cart. Sử dụng Session để lưu trữ thông tin Cart, thêm, xóa sản phẩm trong Cart, tính toán tổng giá trị giỏ hàng, hiển thị thông tin giỏ hàng, lưu trữ thời gian hết hạn của giỏ hàng khi người dùng đăng nhập
![Cart](https://github.com/o0oPintero0o/Java_Web/assets/138128879/f63f2920-92d4-481e-ade0-e72cd603b918)
![ThanhToan](https://github.com/o0oPintero0o/Java_Web/assets/138128879/9d98bd52-31ec-4456-a163-766c76170d01)
Khi Click vào thanh toán thì cửa sổ Servlet "Order" Hiện ra
![Order](https://github.com/o0oPintero0o/Java_Web/assets/138128879/fba0f71b-ca45-4a55-bef0-c7f67aba9239)
Sử dụng Java-Mail để xác thực đơn hàng qua Email. Thông báo đặt hàng thành công!
![Email_Cart](https://github.com/o0oPintero0o/Java_Web/assets/138128879/228c6f2c-7848-4bec-bda1-d79da93db5db)
Giao diện Admin thống kê toàn bộ doanh số bán hàng, sản phẩm và số cmt
![Admin2](https://github.com/o0oPintero0o/Java_Web/assets/138128879/7a47aefe-b528-49ed-bda8-da9b8e59224e)
Giao diện Admin quản lý Product, thêm sửa, xóa, sản phẩm
![Admin1](https://github.com/o0oPintero0o/Java_Web/assets/138128879/74a2426c-0bca-4d7c-940d-7a16344768df)
![AddProduct](https://github.com/o0oPintero0o/Java_Web/assets/138128879/8d0ddfb6-fd36-4939-afdd-3348b03d63d4)
Giao diện Admin thống kê sản phẩm theo tháng 
![Admin4](https://github.com/o0oPintero0o/Java_Web/assets/138128879/737708bb-3b9d-4f01-bc16-37e26ff1adae)

Giao diện Admin thống kê sản phẩm theo ngày 
![Admin3](https://github.com/o0oPintero0o/Java_Web/assets/138128879/f1f56c10-9cb9-4d41-aaec-82a5b7e59caa)

Giao diện Admin thống kê các hóa đơn đã được tạo
![Admin5](https://github.com/o0oPintero0o/Java_Web/assets/138128879/3acc6ade-c58b-41b7-b9b1-2df6423b7625)

Giao diện Admin thống kê và thêm sửa, xóa tài khoản
![Admin6](https://github.com/o0oPintero0o/Java_Web/assets/138128879/886d9ad8-527d-42fa-8d42-92b5b05e0981)
![AddAccount](https://github.com/o0oPintero0o/Java_Web/assets/138128879/5ebc9843-35f2-41a4-9c44-51aeb0671cb3)

Giao diện Admin thống kê Cateory và thêm, xóa
![AddCateory](https://github.com/o0oPintero0o/Java_Web/assets/138128879/dd0ee288-59ff-49de-ac81-16bebe771647)
![Admin9](https://github.com/o0oPintero0o/Java_Web/assets/138128879/3ad0ea94-6052-4ea0-8313-40908afe0703)

Chức năng xuất Excel các dữ liệu thống kê
![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/d5e4ff37-985c-4764-ac8a-60d488804b3f)













