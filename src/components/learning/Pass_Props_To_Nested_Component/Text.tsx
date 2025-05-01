/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/29/2025
 * @Time 11:01 PM
 */
import {ComponentProps} from "react";

export type TextProps = ComponentProps<"span"> & {};

export default function Text({children, ...rest}: TextProps) {
    return (
        <span {...rest}>
            {children}
        </span>
    );
};
