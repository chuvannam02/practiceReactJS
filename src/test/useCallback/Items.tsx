import React from "react";

/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/9/2025
 * @Time 9:47 AM
 */
interface ItemsProps {
    onChange: () => void;
}

const Items = ({}: ItemsProps) => {
    return(
        <>
            <p>Items</p>
        </>
    );
}

// React.memo
// React.memo(Component) chỉ skip re-render nếu props không thay đổi về mặt so sánh nông (shallow compare).
// 🔍 “So sánh nông” (shallow compare) trong React.memo: React sẽ sử dụng toán tử 3 dấu bằng === để so sánh
//
// Với kiểu dữ liệu nguyên thủy (string, number, boolean, null, undefined), React sẽ so sánh bằng toán tử ===.
//
// "abc" === "abc"   // true
// 100 === 100       // true
// true === true     // true
//
//
// 👉 Nếu giống thì React coi là không đổi.
//
//     Với object / array / function, toán tử === sẽ so sánh tham chiếu (reference), chứ không so sánh nội dung.
//
//     [] === [] // false, vì là 2 mảng khác nhau trong bộ nhớ
// {} === {} // false, vì là 2 object khác nhau
// (() => {}) === (() => {}) // false, vì là 2 hàm mới
//
//
// 👉 Vì vậy khi bạn truyền props là object/array/function inline thì mỗi lần re-render, React thấy là tham chiếu mới → coi là thay đổi → component con vẫn re-render, mặc dù “giá trị logic” có thể giống hệt.

// React.memo đúng là không re-render nếu props không đổi.
// Nhưng callback inline luôn tạo function mới nên React.memo thấy khác → vẫn re-render.
// Giải pháp: useCallback để giữ reference.

// Dùng useMemo cho object/array.
// Dùng useCallback cho function.
export default React.memo(Items);
