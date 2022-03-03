import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const HelpPopup = (props) => {
    return (
        <>
            <Dialog onClose={props.onClose} open={props.open}>
                <DialogTitle>User Guide</DialogTitle>
                <DialogContent dividers>
                    <h3 className="heading">How to Use</h3>
                    <p>
                        This app does this or that. This app does this or that. This app does this or that. 
                    </p>
                    <h3 className="heading">About</h3>
                    <p>
                        This app does this or that. This app does this or that. This app does this or that. 
                    </p>
                    <h3 className="heading">Caveats/FYI</h3>
                    <p>
                        This app does this or that. This app does this or that. This app does this or that. 
                    </p>
                    <h3 className="heading">Etc</h3>
                    <p>
                        This app does this or that. This app does this or that. This app does this or that. 
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onClose}>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HelpPopup;