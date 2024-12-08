// @ts-ignore
/**
 * @Project: ReactJS
 * @Author Admin
 * @Date 12/2/2024
 * @Time 5:20 PM
 */
import PropTypes from "prop-types";
import UpdatedComponent from "../hoc/withCounter.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const ClickIncrease = ({ fontSize, handleSetFontSizes, handleDecreaseFontSizes }) => {
    return (
        <div>
            <button onClick={handleSetFontSizes}>
                Increase with click
            </button>
            <p style={{fontSize}}>Size of font in onClick function: {fontSize}</p>
        </div>
    );
};

ClickIncrease.propTypes = {
    fontSize: PropTypes.number.isRequired,
    handleSetFontSizes: PropTypes.func.isRequired,
    handleDecreaseFontSizes: PropTypes.func,
};

// eslint-disable-next-line react-refresh/only-export-components
export default UpdatedComponent(ClickIncrease);