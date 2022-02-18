import { endpointConfiguration } from '../configuration/endpoints-config';
import axios from 'axios';

export const call201 = async () => {
    return axios.get(`${endpointConfiguration.baseUri}/api/201`);
}