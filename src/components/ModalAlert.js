import React from 'react';
import { Alert, Modal } from '@mui/material';

export default function ModalAlert(open,handleClose) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Alert severity="success">Success</Alert>
        </Modal>
    )
}   
