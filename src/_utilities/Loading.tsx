/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/9/2025
 * @Time 4:52 PM
 */
import "./Loading.scss";

interface LoadingProps {
    visible: boolean;
    message?: string;
}

const Loading: React.FC<LoadingProps> = ({ visible, message = "Đang tải..." }) => {
    if (!visible) return null;

    return (
        <div className="loading" id="globalLoading" aria-hidden={!visible}>
            <div className="loading__backdrop"></div>
            <div className="loading__content" role="status" aria-live="polite">
                <div className="spinner"></div>
                <div className="loading__message">{message}</div>
            </div>
        </div>
    );
};

export default Loading;
