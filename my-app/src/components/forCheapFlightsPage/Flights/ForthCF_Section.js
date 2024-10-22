import React, { useEffect, useState } from "react";
import destinationsData from "./data/data.json"; 
import Modal from "./Modal/Modal";
import { Button, TextField } from "@mui/material";

export default function ForthCF_Section() {
    const [destinations, setDestinations] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [editIndex, setEditIndex] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState(null);

    useEffect(() => {
        setDestinations(destinationsData);
    }, []);

    const handleAddOrEdit = () => {
        if (editIndex >= 0) {
            // Edit existing destination
            const updatedDestinations = [...destinations];
            updatedDestinations[editIndex] = { name, price };
            setDestinations(updatedDestinations);
        } else {
            // Add new destination
            setDestinations([...destinations, { name, price }]);
        }
        clearInputs();
    };

    const handleEdit = (index) => {
        const destination = destinations[index];
        setName(destination.name);
        setPrice(destination.price);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedDestinations = destinations.filter((_, i) => i !== index);
        setDestinations(updatedDestinations);
    };

    const clearInputs = () => {
        setName("");
        setPrice("");
        setEditIndex(-1);
    };

    const openModal = (destination) => {
        setSelectedDestination(destination);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedDestination(null);
    };

    return (
        <section className="forth-flights">
            <div className="container">
                <h2 data-i18="109">Cheap flights to popular destinations</h2>
                <div>
                    {destinations.map((destination, index) => (
                        <div className="photo-box" key={index} >
                            <span data-i18={110 + index}>{destination.name}</span>
                            <span className="price">{destination.price}</span>
                            <Button color="inherit" variant="outlined" onClick={() => handleEdit(index)}>Edit</Button>
                            <Button color="error" variant="outlined" onClick={() => handleDelete(index)}>Delete</Button>
                            <Button variant="text" onClick={() => openModal(destination)}>Details</Button>
                        </div>
                    ))}
                </div>
                <div className="input-form">
                    <h3>{editIndex >= 0 ? "Edit Destination" : "Add Destination"}</h3>
                    <TextField
                        variant="standard"
                        type="text"
                        placeholder="Destination Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="standard"
                        type="text" 
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)
                        }
                    />
                    <Button color="success" variant="contained" onClick={handleAddOrEdit}>
                        {editIndex >= 0 ? "Update" : "Add"}
                    </Button>
                    <Button color="primary" variant="contained" onClick={clearInputs}>Clear</Button>
                </div>

                {selectedDestination && (
                    <Modal
                        isOpen={modalOpen}
                        onClose={closeModal}
                        destination={selectedDestination}
                    />
                )}
            </div>
        </section>
    );
}