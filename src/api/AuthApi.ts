import axios from 'axios';

const authApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const loginWithCredentialsApi = async (
  email: string,
  password: string
) => {
  try {
    const response = await authApi.post('/post', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    return error;
  }
};
