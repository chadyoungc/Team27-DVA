import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const Header = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleModalClose = () => {
        setOpenModal(false);
    }

    return (
        <>
            <header className="App-header">
                <div className="flex-header">
                    <RestaurantMenuIcon color="secondary" />
                    <h3 style={{ margin: "10px 5px" }}>OneRecipe</h3>
                </div>
                <Button onClick={handleOpenModal} size="small" color="secondary" className="flush-right">
                    <HelpIcon fontSize="small" />
                    <span style={{ marginLeft: 5 }}>Help</span>
                </Button>
            </header>

            <Dialog onClose={handleModalClose} open={openModal}>
                <DialogTitle>User Guide</DialogTitle>
                <DialogContent dividers>
                    <p>We can put info here about how to use the app, caveats, about us, etc.</p>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleModalClose}>
                        Okay
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default Header;