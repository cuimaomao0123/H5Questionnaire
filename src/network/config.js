// const devBaseURL = "http://3c0900e549.qicp.vip/";
const devBaseURL = "http://114.55.53.71:8080/";
const proBaseURL = "http://114.55.53.71:8080/";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 8000;
 