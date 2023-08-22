/** 6. TOÁN TỬ SỐ HỌC >> Biểu thức (tham số quy về number hoặc đôi khi là string) trả về 1 số (đôi khi là chuỗi)
 *  +   --> Phép cộng
 *  -   --> Phép trừ  (chuỗi chữ >> lỗi, chuối số >> số, true >> 1 , false >> 0, null >>0; underfined >> lỗi)
 *  *   --> Phép nhân
 *  /   --> Phép chia
 *  **  --> Phép luỹ thừa
 *  %   --> Phép chia lấy dư // 10 % 3 == 1
 *  ++  --> Phép tăng 1 đơn vị (dùng cho biến)
 *  --  --> Phép giảm 1 đơn vị (dùng cho biến)
 */



// Giống : cả 2 đều có tác dụng là tăng biến x lên 1 đơn vị
// Khác: khác về giá trị 
//  ++x: trả về giá trị của x sau khi được tăng
//  x++: trả về giá trị của x trước khi được tăng

let x = 10

console.log(++x/2+x++*2 + x) // 11/2 + 11*2 +12