import React, { use } from 'react';
import BookingRow from './BookingRow';

const BookingList = ({myBookingPromise}) => {
    const myBooking=use(myBookingPromise)
    return (
           <div className="max-w-5xl mx-auto px-4 py-6 pt-25">

     {myBooking.length==0 && <h2 className="text-2xl font-semibold mb-4 text-center">You Havn't Booked Any Service Yet.</h2>}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Service Booked: <span className="text-blue-600">{myBooking.length}</span>
      </h2>
      {myBooking.length>0 && <div className="overflow-x-auto rounded-lg shadow border">
        <table className="table w-full table-zebra">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Service </th>
              <th>Service Name</th>
              <th>Provider Name</th>
              <th>Provider Email</th>
            </tr>
          </thead>
          <tbody>
            {myBooking.map((booking, index) => (
              <BookingRow
                key={booking._id}
                index={index}
                booking={booking}
              />
            ))}
          </tbody>
        </table>
      </div>}
      
    </div>

    );
};

export default BookingList;