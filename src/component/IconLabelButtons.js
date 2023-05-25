import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<MarkEmailReadIcon />}> VERIFY </Button>
    </Stack>
  );
}
