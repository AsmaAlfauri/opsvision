'use client';

import { create } from 'zustand';

type Role = 'admin' | 'viewer' | 'guest';

interface AuthState {
  role: Role;
  loginAsAdmin: () => void;
  loginAsViewer: () => void;
  loginAsGuest: () => void;
  logout: () => void;
  setRole: (role: Role) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  role: 'guest',
  loginAsAdmin: () => set({ role: 'admin' }),
  loginAsViewer: () => set({ role: 'viewer' }),
  loginAsGuest: () => set({ role: 'guest' }),
  logout: () => set({ role: 'guest' }),
  setRole: (role) => set({ role }),
}));
