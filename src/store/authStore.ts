import { create } from 'zustand';

export type UserRole = 'admin' | 'viewer';

interface AuthState {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  role: 'admin',
  setRole: (role) => set({ role }),
}));
