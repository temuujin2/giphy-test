import * as React from 'react';
import {Button, TextField, Modal, ModalDialog, Stack, Typography} from '@mui/joy';
import Add from '@mui/icons-material/Add';


export const BasicModalDialog = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
      sx={{paddingLeft:'5px'}}
        variant="outlined"
        color="neutral"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Login
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill in the information of the project.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField label="Email" autoFocus required />
              <TextField label="Password" autoFocus required />
              <Button color="primary" type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
