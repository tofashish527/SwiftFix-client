import React, { Suspense } from 'react';
import BookingList from '../Component/BookingList';
import { myBookingPromise } from '../api/BookingApi';
import UseAuth from '../hooks/UseAuth';
import { Helmet } from 'react-helmet';

const BookedServices = () => {
    const {user}=UseAuth();
    return (
        <div>
             <Helmet>
        <title>
          SwiftFix | AllService
        </title>
      </Helmet>
            <Suspense fallback={'loading YOUR bookings!!'}>
                 <BookingList myBookingPromise={myBookingPromise(user.email)}></BookingList>
            </Suspense>
        </div>
    );
};

export default BookedServices;