import axios from 'axios';

const {protocol,host} = (typeof window !== 'undefined')
    ? window.location
    : {protocol:null,host:null};

const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = (protocol && host && isProduction )
    ? `${protocol}//${host}`
    : 'http://127.0.0.1:3000';

export const API_BASE = `${BASE_URL}/api`;

export const GET = (
    options
) => {
    return axios({
        method:'get',
        timeout: 10000,
        baseURL: API_BASE,
        crossDomain: !isProduction,
        withCredentials: !isProduction,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-type':'application/json',
            'Accept':'application/json'
        },
        ...options
    });
}

export const POST = (
    options
) => {
    return axios({
        method: 'post',
        timeout: 8000,
        baseURL: API_BASE,
        crossDomain:true,
        withCredentials:true,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            //s'Content-type':'application/json',
            'Accept':'application/json'
        },
        ...options
    });
}
