import React from "react";
import "./Modal.css"; 
import { Button } from "@mui/material";

const Modal = ({ isOpen, onClose, destination }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{destination.name}</h2>
                <p>Price: {destination.price}</p>
                <Button variant="contained" color="error" onClick={onClose}>Close</Button>
            </div>
        </div>
    );
};

export default Modal;