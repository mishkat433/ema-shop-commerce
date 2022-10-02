import React from 'react';

const DetailsModal = ({ details, handleModal }) => {
    const { name, img, price } = details
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-outline border-2 border-cyan-800 absolute right-2 top-2" onClick={() => handleModal([])}>✕</label><br />
                    <img src={img} alt="NOT fount" />
                    <h3 className="text-lg font-bold">{name} </h3>
                    <h3 className="text-lg ">Price only : ${price} </h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-outline border-2 border-cyan-800 absolute right-2" onClick={() => handleModal([])}>Close</label><br />
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;