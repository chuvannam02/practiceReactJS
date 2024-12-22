/**
 * @Project: ReactJS
 * @Author Admin
 * @Date 12/2/2024
 * @Time 5:02 PM
 */

import { useState } from 'react';

const UpdatedComponent = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [fontSize, setFontSize] = useState(10);

        const handleSetFontSizes = () => setFontSize(fontSize => fontSize + 1);
        const handleDecreaseFontSizes = () => setFontSize(fontSize => fontSize - 1);

        return <OriginalComponent {...props} handleSetFontSizes={handleSetFontSizes} fontSize={fontSize} handleDecreaseFontSizes={handleDecreaseFontSizes}/>;
    };
    return NewComponent;
};

export default UpdatedComponent;