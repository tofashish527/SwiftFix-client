import React from 'react';
import PopularServices from '../Component/PopularServices';
import WhySwiftFix from '../Component/WhySwiftFix';
import Banner from '../Component/Banner';
import Review from '../Component/Review';
import { Helmet } from 'react-helmet';

const Home = () => {
    const servicePromise=fetch('http://localhost:3000/services').then(res=>res.json())
    return (
        <div>
             <Helmet>
        <title>
          SwiftFix | Home
        </title>
         <meta name="description" content="Welcome to SwiftFix - Home of Reliable Services" />
      </Helmet>
            <Banner></Banner>
            <PopularServices servicePromise={servicePromise}></PopularServices>
            <WhySwiftFix></WhySwiftFix>
            <Review></Review>
        </div>
    );
};

export default Home;