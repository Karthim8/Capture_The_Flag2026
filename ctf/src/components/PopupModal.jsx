import React from "react";
import "./PopupModal.css";

const PopupModal = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <p className="popup-message">{message}</p>
                <button className="popup-close-btn" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default PopupModal;
