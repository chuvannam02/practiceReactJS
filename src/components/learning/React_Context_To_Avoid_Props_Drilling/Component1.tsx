/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 4/29/2025
 * @Time: 11:21 PM
 * @File: Component1.ts
 */
import {UserProvider} from "./UserContext.tsx";
import Component2 from "./Component2.tsx";
import {ThemeProvider} from "./ThemeContext.tsx";

export default function Component1() {
    return (
        <>
            {/*<UserContext.Provider value={user}>*/}
            {/*    <div>*/}
            {/*        <h1>Component 1 (Provider)</h1>*/}
            {/*        <Component2/>*/}
            {/*    </div>*/}
            {/*</UserContext.Provider>*/}
            <ThemeProvider>
                <UserProvider>
                    <div className="p-4">
                        <h1>🌗 App với Context + Reducer</h1>
                        <Component2 />
                    </div>
                </UserProvider>
            </ThemeProvider>
        </>
    )
};
