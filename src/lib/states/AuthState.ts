import { create } from 'zustand';
import { loginWithCredentialsApi } from '../../api/AuthApi';

interface AuthState {
  token: string | null;
  userLoggedIn: () => boolean;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
}

const useAuthState = create<AuthState>((set, get) => ({
  token: localStorage.getItem('token') || null,
  userLoggedIn: () => !!get().token,
  loginWithCredentials: async (email: string, password: string) => {
    try {
      const response = await loginWithCredentialsApi(email, password);
      localStorage.setItem('token', response.token);
      set({ token: response.token });
      return response;
    } catch (error) {
      console.error('Error logging in', error);
      throw error;
    }
  },
}));

export default useAuthState;
