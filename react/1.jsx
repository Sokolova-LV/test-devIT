import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const MyModal = ({ open, disableGlobalScroll, children }) => {
    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        setModalOpen(true);

        if (disableGlobalScroll) {
            if (open) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }, [open, disableGlobalScroll]);

    const handleClose = () => {
        setModalOpen(false);
    };

    if (!modalOpen) {
        return null;
    };

    return ReactDOM.createPortal(
        <div>
            {children}
            <button onClick={handleClose}>close</button>
        </div>,
        document.getElementById('modal-root')
    );
};

// Пример:

export const SomeComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <MyModal open={open} disableGlobalScroll={true}>
            <div>
                <h1>Some content</h1>
                <button onClick={() => setOpen(false)}>close</button>
            </div>
        </MyModal>
    );
};