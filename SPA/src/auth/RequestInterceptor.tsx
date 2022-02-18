import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from './authConfig';

interface RequestInterceptorProps {
    children: JSX.Element,
}

const RequestInterceptor: React.FC<RequestInterceptorProps> = ({ children }: RequestInterceptorProps) => {
    const { instance, accounts } = useMsal();
    const account = useAccount(accounts[0]);
    let axiosRequestInterceptor = null;

    if (axiosRequestInterceptor === null) {
        console.log("Define interceptor");
        /* eslint-disable no-param-reassign */
        axiosRequestInterceptor = axios.interceptors.request.use(async (config) => {
            if (!account) {
                throw Error('No active account! Verify a user has been signed in.');
            }

            console.log("Interceptor triggered");

            const response = await instance.acquireTokenSilent({
                ...loginRequest,
                account,
            });

            const bearer = `Bearer ${response.accessToken}`;

            if (config.headers) {
                config.headers.Authorization = bearer;
            } else {
                config.headers = {
                    Authorization: bearer
                };
            }

            return config;
        });
    }


    axios.interceptors.response.use(async (response) => {

        console.log(response.request);

        if (response.status === 401) {

        }

        return response;

    });

    /* eslint-enable no-param-reassign */

    return (
        <>
            {children}
        </>
    );
};

export default RequestInterceptor;