// src/app/services/mockApi.ts
import { users } from '@/app/data/users';
import { currentUser } from '@/app/data/currentUser';
import { adminDashboardData, viewerDashboardData } from '@/app/data/dashboard';
import { DashboardData, Role, User } from '../types';

// Delay to simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Random error simulation (10% chance)
const maybeError = () => {
  if (Math.random() < 0.1) throw new Error('Random API error occurred');
};

/* ==================== Users API ==================== */

// Get all users
export const getUsers = async (): Promise<User[]> => {
  await delay(500);
  maybeError();
  return [...users]; // clone to avoid direct mutation
};

// Add new user
export const addUser = async (user: User): Promise<User> => {
  await delay(500);
  maybeError();
  users.push(user);
  return user;
};

// Update existing user
export const updateUser = async (user: User): Promise<User> => {
  await delay(500);
  maybeError();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx !== -1) users[idx] = user;
  return user;
};

// Delete user by ID
export const deleteUser = async (id: string): Promise<string> => {
  await delay(500);
  maybeError();
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1) users.splice(idx, 1);
  return id;
};

/* ==================== Dashboard API ==================== */

export const getDashboardData = async (role: Role): Promise<DashboardData> => {
  await delay(500);
  maybeError();
  if (role === 'admin') return adminDashboardData;
  if (role === 'viewer') return viewerDashboardData;
  return { kpis: [], chart: [] }; // guest / empty
};

/* ==================== Current User API ==================== */

// Get current logged-in user
export const getCurrentUser = async (): Promise<typeof currentUser> => {
  await delay(200);
  return { ...currentUser };
};
