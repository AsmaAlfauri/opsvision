// src/app/features/users/hooks/useUsers.ts
'use client';

import { useState, useEffect } from 'react';
import { User } from '@/app/types';

// Mock initial users
const initialUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'viewer' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'viewer' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'guest' },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@example.com', role: 'admin' },
];

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(initialUsers);
      setLoading(false);
    }, 1000); // 1 second loading

    return () => clearTimeout(timer);
  }, []);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const updateUser = (user: User) => {
    setUsers(prev => prev.map(u => (u.id === user.id ? user : u)));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return { users, loading, addUser, updateUser, deleteUser };
}
