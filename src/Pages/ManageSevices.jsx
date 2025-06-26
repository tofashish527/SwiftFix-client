import React, { Suspense } from 'react';
import UseAuth from '../hooks/UseAuth';
import Servicelist from '../Component/Servicelist';
import { serviceCreatedByPromise } from '../api/ServiceApi';

const ManageSevices = () => {
    const {user}=UseAuth();
    return (
        <div>
            <Suspense>
              <Servicelist serviceCreatedByPromise={serviceCreatedByPromise(user.email)}></Servicelist>
            </Suspense>
        </div>
    );
};

export default ManageSevices;