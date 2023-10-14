const API_BASE_URL = 'http://127.0.0.1:8000';

export const ENROLL_REQUESTS_API = `${API_BASE_URL}/enroll_requests`;
export const REGISTER_INFO_API = `${API_BASE_URL}/register_info`;
export const LOGIN_API = `${API_BASE_URL}/login`;
export const HOME_API = `${API_BASE_URL}`;
export const USER_API = (username) => `${API_BASE_URL}/${username}`;
