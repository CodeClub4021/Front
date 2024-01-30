import { useRouteError } from "react-router-dom";

export default function NotFound() {

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                this page not found
            </p>
        </div>
    );
}