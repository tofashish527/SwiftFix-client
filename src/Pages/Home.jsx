import React from 'react';
import PopularServices from '../Component/PopularServices';

const Home = () => {
    const servicePromise=fetch('http://localhost:3000/services').then(res=>res.json())
    return (
        <div>
            ju
            <PopularServices servicePromise={servicePromise}></PopularServices>
        </div>
    );
};

export default Home;