import axios from 'axios';
import { refreshToken } from './auth';

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
  });

// Automatically include token if it exists
const token = localStorage.getItem('access_token');
if (token) {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Refresh token on 401
API.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshed = await refreshToken();
      if (refreshed) {
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(err);
  }
);

export const fetchProducts = () => axios.get(`${API}/inventory/products/`);
export const fetchInventory = () => API.get('/inventory/records/');
export const fetchTransactions = () => API.get('/accounting/transactions/');
export const fetchExpenses = () => API.get('/accounting/expenses/');
export const fetchProfitLossReport = () => API.get('/accounting/profit-loss-report/');

export default API;