
import React from 'react';

const BookingRow = ({index,booking}) => {
    
    const {serviceImage,serviceName,providerName,providerEmail,_id}=booking;

    return (
            <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Company Logo" />
            </div>
          </div>
          <div>
            <div className="font-bold"></div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{providerName}</td>
      <td>{providerEmail}</td>

    </tr>
    );
};

export default BookingRow;