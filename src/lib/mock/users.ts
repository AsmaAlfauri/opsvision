export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'viewer';
};

export const mockUsers: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'viewer' },
  { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'viewer' },
];
