import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { loginWithCredentialsApi } from '../../api/AuthApi';

interface AuthState {
  token: string | null;
  userLoggedIn: () => boolean;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthState = create<AuthState>()(
  devtools(
    (set, get) => ({
      token: localStorage.getItem('token') || null,
      something: 'something',
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
      logout: () => {
        localStorage.removeItem('token');
        set({ token: null });
      },
    }),
    { name: 'AuthState' }
  )
);

export default useAuthState;
