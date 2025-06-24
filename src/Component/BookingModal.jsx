import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const BookingModal = ({ service, user, onClose, onSubmit }) => {
  const [takingDate, setTakingDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      serviceId: service._id,
      serviceName: service.serviceName,
      serviceImage: service.serviceImage,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      takingDate,
      instructions,
      price: service.servicePrice,
      serviceStatus: 'pending',
    };

    onSubmit(bookingData); // Post to DB
    onClose(); // Close modal
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-600 hover:text-red-500 text-xl">✕</button>
        <h2 className="text-xl font-bold text-center mb-4">Book This Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Non-editable fields */}
          <input type="text" value={service._id} disabled className="input w-full" />
          <input type="text" value={service.serviceName} disabled className="input w-full" />
          <input type="text" value={service.serviceImage} disabled className="input w-full" />
          <input type="text" value={service.providerEmail} disabled className="input w-full" />
          <input type="text" value={service.providerName} disabled className="input w-full" />
          <input type="text" value={user.email} disabled className="input w-full" />
          <input type="text" value={user.displayName} disabled className="input w-full" />
          <input type="text" value={`৳ ${service.servicePrice}`} disabled className="input w-full" />

          {/* Editable fields */}
          <input
            type="date"
            required
            className="input w-full"
            value={takingDate}
            onChange={(e) => setTakingDate(e.target.value)}
          />

          <textarea
            placeholder="Special Instructions"
            className="textarea w-full"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full">Purchase</button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default BookingModal;
