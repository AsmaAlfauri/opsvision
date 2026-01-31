'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';
import { User } from '@/lib/mock/users';

interface Props {
  user: User;
  onSave: (user: User) => void;
  onClose: () => void;
}

export default function UserDialog({ user, onSave, onClose }: Props) {
  const [formData, setFormData] = useState<User>(user);

  useEffect(() => { setFormData(user); }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{user.id ? 'Edit User' : 'Add User'}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
        <TextField select label="Role" name="role" value={formData.role} onChange={handleChange}>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="viewer">Viewer</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onSave(formData)} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
