import { memo } from "react";

// @ts-ignore
/**
 * @Project: ReactJS
 * @Author: Admin
 * @Date: 12/2/2024
 * @Time: 12:41 PM
 * @File: Content.tss
 */

function Content({ children, count }) {
    console.log("Re-rendering Content component");
    return (
        <div>
            {children}
            <h1>Welcome to the ReactJS App!</h1>
            <p>This is the content component.</p>
        </div>
    );
}

export default memo(Content);