/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/29/2025
 * @Time 11:02 PM
 */
import {ComponentProps} from "react";
import Text, {TextProps} from "./Text.tsx";

// & 👉 Toán tử intersection type – để kết hợp nhiều kiểu dữ liệu lại với nhau.

// ComponentProps<"button"> là kiểu dữ liệu của thẻ button
// Lấy toàn bộ props mặc định của thẻ <button> trong JSX, như onClick, disabled, type, className, v.v.
// => Điều này giúp Button của bạn hoạt động giống button gốc của HTML.

// ComponentProps là kiểu dữ liệu của các thẻ html
type ButtonProps = ComponentProps<"button"> & {
    textProps?: TextProps
};

// Pass props to nested component
// children: 👉 Nội dung được đặt giữa <Button>...nội dung...</Button>, được tự động thêm bởi React.
// textProps: 👉 Prop riêng bạn tạo ra, dùng để truyền tiếp vào component <Text />.
// ...rest: 👉 Dùng để gom các props còn lại (như onClick, className, v.v.), và sẽ được truyền vào thẻ <button>.
export default function Button({children, textProps, ...rest}: ButtonProps) {
    return (
        <button {...rest}>
            {/*<button {...rest}>:  👉 Dàn trải toàn bộ props còn lại vào button, ví dụ onClick, disabled, v.v.*/}
            {/*<Text>{ children }</Text>*/}
            <Text {...textProps}>{ children }</Text>
            {/*<Text {...textProps}>: 👉 Dàn trải toàn bộ props trong textProps (như className, style, title, …) vào Text.*/}
            {/*{children}:  👉 Render nội dung con mà bạn truyền vào trong Button.*/}
        </button>
    );
};
