import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/token/`, {
      username,
      password,
    });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    localStorage.setItem('username', username);  // store username
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
    return response;
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  delete axios.defaults.headers.common['Authorization'];
};

export const refreshToken = async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (!refresh) return false;

  try {
    const res = await axios.post('http://localhost:8000/api/token/refresh/', {
      refresh,
    });
    localStorage.setItem('access_token', res.data.access);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access}`;
    return true;
  } catch {
    return false;
  }
};