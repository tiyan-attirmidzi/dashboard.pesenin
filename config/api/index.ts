import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
  params?: object;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
  params,
}: CallAPIProps) {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
      Accept: 'application/json',
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json',
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
    params,
  }).catch((error) => error.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  // const { length } = Object.keys(response.data);

  const res = {
    error: false,
    message: 'success',
    data: response.data,
    // data: length > 1 ? response.data : response.data.data,
  };

  return res;
}
