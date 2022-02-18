import axiosInstance from './axios-config';
import { endpointConfiguration } from '../configuration/endpoints-config';

export const call201 = async () => {
    return axiosInstance.get(`${endpointConfiguration.baseUri}/api/201`);
}