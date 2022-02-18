import axiosInstance from './axios-config';
import { endpointConfiguration } from '../configuration/endpoints-config';

export const call201 = async () => {
    axiosInstance.get(`${endpointConfiguration.baseUri}/api/201`).then(() => {
        console.log('got 201 response');
    }, error => console.error(error));
}