import React, { Suspense } from 'react';
import UseAuth from '../hooks/UseAuth';
import Servicelist from '../Component/Servicelist';
import { serviceCreatedByPromise } from '../api/ServiceApi';
import { Helmet } from 'react-helmet';

const ManageSevices = () => {
    const {user}=UseAuth();
    return (
        <div>
             <Helmet>
        <title>
          SwiftFix | ManageServices
        </title>
      </Helmet>
            <Suspense>
              <Servicelist serviceCreatedByPromise={serviceCreatedByPromise(user.email)}></Servicelist>
            </Suspense>
        </div>
    );
};

export default ManageSevices;