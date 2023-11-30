import { Snackbar, Alert } from '@mui/material';
import React from 'react';

export const Error = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        sx={{ width: '100%' }}
      >
        Произошла ошибка загрузки :(
        <br />
        Повторите запрос позже.
      </Alert>
    </Snackbar>
  );
};
