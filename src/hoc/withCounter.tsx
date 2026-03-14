/**
 * @Project: ReactJS
 * @Author Admin
 * @Date 12/2/2024
 * @Time 5:02 PM
 */

import { useState, ComponentType } from 'react';

const UpdatedComponent = (OriginalComponent: ComponentType<unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const NewComponent = (props: any) => {
        const [fontSize, setFontSize] = useState(10);

        const handleSetFontSizes = () => setFontSize(fontSize => fontSize + 1);
        const handleDecreaseFontSizes = () => setFontSize(fontSize => fontSize - 1);

        return <OriginalComponent {...props} handleSetFontSizes={handleSetFontSizes} fontSize={fontSize} handleDecreaseFontSizes={handleDecreaseFontSizes}/>;
    };
    return NewComponent;
};

export default UpdatedComponent;
