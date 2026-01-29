'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { User } from '@/features/users/services/mockApi';
import { useState, useEffect } from 'react';

interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (form: Omit<User, 'id'>) => void;
  editingUser: User | null;
}

export default function UserDialog({ open, onClose, onSave, editingUser }: UserDialogProps) {
  const [form, setForm] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    role: 'viewer',
    status: 'active',
  });

  useEffect(() => {
    if (editingUser) setForm({ ...editingUser });
    else setForm({ name: '', email: '', role: 'viewer', status: 'active' });
  }, [editingUser]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editingUser ? 'Edit User' : 'Add User'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Name"
          fullWidth
          margin="dense"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        />
        <TextField
          label="Email"
          fullWidth
          margin="dense"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
        />
        <TextField
          label="Role"
          fullWidth
          margin="dense"
          value={form.role}
          onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value as User['role'] }))}
        />
        <TextField
          label="Status"
          fullWidth
          margin="dense"
          value={form.status}
          onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as User['status'] }))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
