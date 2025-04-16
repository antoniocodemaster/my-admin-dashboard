import { create } from 'zustand';
import { loginWithCredentialsApi } from '../../api/AuthApi';

interface AuthState {
  loggedInUser: boolean;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
}

const useAuthState = create<AuthState>((set) => ({
  loggedInUser: false,
  loginWithCredentials: async (email: string, password: string) => {
    set({ loggedInUser: true });
    return await loginWithCredentialsApi(email, password);
  },
}));

export default useAuthState;
