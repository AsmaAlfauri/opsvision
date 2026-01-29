import { UserRole } from '@/store/authStore';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
}

// Initial mock data
let users: User[] = [
  { id: '1', name: 'Sara Ahmed', email: 'sara@opsvision.com', role: 'admin', status: 'active' },
  { id: '2', name: 'Omar Khaled', email: 'omar@opsvision.com', role: 'viewer', status: 'inactive' },
];

// Utility to simulate latency
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getUsers = async (): Promise<User[]> => {
  await delay(300); // simulate network
  return [...users];
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  await delay(300);
  const newUser = { ...user, id: (users.length + 1).toString() };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, updated: Partial<User>): Promise<User | null> => {
  await delay(300);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...updated };
  return users[idx];
};

export const deleteUser = async (id: string): Promise<boolean> => {
  await delay(300);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
};
