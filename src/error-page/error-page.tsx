/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 4/23/2025
 * @Time 11:37 PM
 */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as { statusText?: string; message?: string };
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );
}
