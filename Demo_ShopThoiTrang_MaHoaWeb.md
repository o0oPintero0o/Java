Giao diện thời trang sau khi khởi chạy. ShopThoiTrang
![Screenshot 2024-03-08 150159](https://github.com/o0oPintero0o/Java_Web/assets/138128879/622623ed-8846-45f9-b38b-a1f57a100586)
![Screenshot 2024-03-08 150302](https://github.com/o0oPintero0o/Java_Web/assets/138128879/adc63ee5-6932-4b5e-b9a7-f6a80e91962d)
![Screenshot 2024-03-08 150601](https://github.com/o0oPintero0o/Java_Web/assets/138128879/cb1c898f-7dcc-48fa-8e10-7f263859bafe)
![Screenshot 2024-03-08 150622](https://github.com/o0oPintero0o/Java_Web/assets/138128879/ce5b235c-00b7-45c1-9252-c2257a95f491)
![Screenshot 2024-03-08 150641](https://github.com/o0oPintero0o/Java_Web/assets/138128879/fb05067f-a19f-4621-bc29-9522ff9b1b8d)

Cấp chứng chỉ. Triển khai HTTPS
1.	Triển khai web https trên Windows
Bước 1: Cài đặt chứng chỉ Self Signed Certificate cho trang web
•	Mở Window search cụm từ ‘Window PowerShell’ với quyền Admintrator
•	Giao diện sau khi hiện lên

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/d75ffb03-05b7-48a4-b6a9-6d5883aedfa8)

•	Thực hiện dòng lệnh sau
•	New-SelfSignedCertificate -Subject "localhost" -TextExtension @("2.5.29.17={text}DNS=localhost&IPAddress=127.0.0.1&IPAddress=::1")
•	Cú pháp trên thực hiện 
+ New-SelfSignedCertificate: là cmdlet trong PowerShell được sử dụng để tạo chứng chỉ tự ký.
+ "localhost": Điều này đặt Subject của chứng chỉ là "localhost". Subject là một phần quan trọng của một chứng chỉ và thường chứa thông tin về thực thể chứng chỉ đại diện.
+TextExtension@("2.5.29.17={text}DNS=localhost&IPAddress=127.0.0.1&IPAddress=::1"): Đây là một extension (mở rộng) của chứng chỉ được thiết lập dưới dạng một chuỗi văn bản. Trong trường hợp này, extension này đang cung cấp thông tin về DNS và địa chỉ IP của localhost. Điều này là quan trọng khi chứng chỉ được sử dụng để tạo một máy chủ web địa phương (localhost).
•	Kết quả thu được khởi tạo thành công:

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/69e6699a-2dc0-47e6-8c58-84a6b880ddf8)

•	Thu được chứng chỉ (Certificate) tự ký là một loại chứng chỉ mà bạn tạo và ký tại chính máy chủ của mình thay vì thông qua một bên cấp chứng chỉ thứ ba.
Bước 2: Chuẩn bị giao diện HTML/CSS 
Chuẩn bị file Project-HTML/CSS nên được đặt ngoài ThisPC không nên đặt trong User tránh việc phân quyền, máy tính không thể truy cập được
•	Trình duyệt Browse sẽ tự động truy cập đến file index.html làm giao diện chính
Bước 3: Cài đặt trang web trên Internet Information Services Manager
Mở Window search “Internet Information Service (IIS) Manager”
•	Trong trường hợp máy tính của bạn search không hiển thị Internet Information Service (IIS). Bạn cần truy cập Control Panel 
•	Chọn Program hoặc Uninstall a program

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/fc8eb79c-71bc-48b4-b357-138b05bfb246)

•	Click “ Turn Windows features on or off

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/dcd1e97d-fcd7-4520-8ce0-bdd69bdc90ee)

•	Click chọn vào “Internet Information Service” . Bấm ‘OK’ và thử truy cập lại

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/132ba149-af4b-4a94-bb43-3f192f408d43)

•	Mở giao diện “Internet Information Service (IIS) Manager”

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/bdeb94d6-1fff-4eab-ba5a-88132b82c417)

•	Giao diện Explore 

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/a4d7e1ce-0324-422f-8c89-7c9b43d18e23)

•	Đưa file Shop_ThoiTrang vào inetpub>wwwroot. Default WebSite sẽ mặc định truy cập đến địa chỉ trên.
•	Mục “Edit Site”  > “Bindings”

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/efdfbca5-a39c-4296-a4d9-7e704d21e11e)

•	Sau khi tạo đường dẫn Brower, truy cập đường dẫn vừa tạo

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/2b585d66-6f6b-41ae-afa9-1766a09d3572)
•	Giao diện hiển thị

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/d4d2985a-c11d-43fa-8d57-0f4bb54b24d6)

Bước 4: Cài đặt tin cậy chứng chỉ SSL đã cài đặt
•	Trên thanh công cụ Window Search, tìm kiếm và mở mmc
•	Trên thanh công cụ mmc, chọn File > Add/Remove Snap-in và thêm Certificates cho Local Computer
•	Sau đó, copy chứng chỉ SSL đã cài ở bước 1 trong Certificates (Local Computer)/ Personal/Certificates vào Certificates (Local Computer)/ Trusted Root Certification Authorities/Certificates

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/35567272-18f7-4d5d-8018-2b1cf3d18f52)

•	Copy Localhost vừa tạo

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/d8340d15-39a9-4d86-98f1-b9d3d14a5dcf)
•	Paste vào Mục Trusted Root Certification  > Certificate

![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/78080baa-1585-4d6e-bab9-7c565e95f30c)

Bước 5: Hoàn thành
	Hoàn thành tạo chứng chỉ TSL/SSL, chứng chỉ tự tạo trên Window. Trang web được kiểm duyệt “Kết nối an toàn” và thông báo “chứng chỉ SSL hợp lệ”.
 
![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/ed2bb89c-726f-41d4-8cd4-3c19cb8a72a7)
![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/99267f45-7dae-4b58-a0a7-17a8c43eff89)
![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/ae64be33-f090-4dd8-9eaa-cbdb979cebb1)
![image](https://github.com/o0oPintero0o/Java_Web/assets/138128879/b955ca90-1ceb-4ff2-83e0-0d51594606ea)


