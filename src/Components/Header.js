import React, { useState, useEffect } from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import HelpPopup from './HelpPopup';

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
                    <h4 style={{ margin: "10px 5px" }}>OneRecipe</h4>
                </div>
                <Button onClick={handleOpenModal} size="small" color="secondary" className="flush-right">
                    <HelpIcon fontSize="small" />
                    <span style={{ marginLeft: 5 }}>Help</span>
                </Button>
            </header>

            <HelpPopup
                onClose={handleModalClose}
                open={openModal}
            />
        </>
    )
}

export default Header;