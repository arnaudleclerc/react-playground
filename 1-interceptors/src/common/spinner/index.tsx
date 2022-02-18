import { usePromiseTracker } from "react-promise-tracker";
import { CradleLoader } from 'react-loader-spinner';
import './spinner.css';

export const Spinner: any = () => {

    const { promiseInProgress } = usePromiseTracker();

    return (
        true && (
            <CradleLoader ariaLabel="loading-indicator" />
        )
    );

}