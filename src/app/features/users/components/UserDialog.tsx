'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';
import { User } from '@/app/data/users';

interface UserDialogProps {
  user: Partial<User>; // يسمح بتمرير user فارغ عند الإضافة
  onSave: (user: User) => void;
  onClose: () => void;
}

export default function UserDialog({ user, onSave, onClose }: UserDialogProps) {
  const [formData, setFormData] = useState<Partial<User>>(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.role) return;
    onSave(formData as User);
  };

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{formData.id ? 'Edit User' : 'Add User'}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          select
          label="Role"
          name="role"
          value={formData.role || ''}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="viewer">Viewer</MenuItem>
          <MenuItem value="guest">Guest</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
