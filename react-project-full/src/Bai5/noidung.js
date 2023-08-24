/******************************************************
 * CHÚ Ý: TRONG BÀI ANH CÓ NÓI VỀ CÁCH DI CHUYỂN THƯ MỤC TRONG TERMINAL, CÓ ĐOẠN DI CHUYỂN RA NGOÀI THƯ MỤC, ANH QUÊN THÊM CHỮ cd NÊN NÓ KHÔNG RA ĐƯỢC NHÉ, CÚ PHÁP SẼ LÀ: "cd ./.."
 *
 *
 */

/** hooks trong react
 *  - Là những hàm được viết sẵn để sử dụng bên trong function component
 *  - Chỉ dùng được trong function component
 *  - Tạo những component đơn giản, đầy đủ tính năng
 */

// useState(): giúp đơn giản hoá việc thay đổi giao diện khi dữ liệu thay đổi
// Cần import {useState} from 'react'
function myComponent() {
    const [state, setState] = useState(initState);
    //...
}

// làm việc với callback
setState((preState) => preState + 1);
// tối ưu với initState bằng callback(sẽ lấy giá trị trả về của callback làm initState)
// Chú ý khi thêm thuộc tính vào object, phải sử dụng toán tử spread (...)
