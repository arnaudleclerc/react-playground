import { Spinner } from "react-bootstrap";
import { usePromiseTracker } from "react-promise-tracker";
import './spinner.css';

export const LoadingIndicator: any = () => {

    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && (
            <Spinner animation="border" />
        )
    );

}