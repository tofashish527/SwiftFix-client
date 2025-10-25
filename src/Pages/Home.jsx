import React from 'react';
import PopularServices from '../Component/PopularServices';
import WhySwiftFix from '../Component/WhySwiftFix';
import Banner from '../Component/Banner';
import Review from '../Component/Review';
import { Helmet } from 'react-helmet';
import Newsletter from '../Component/Newsletter';

const Home = () => {
    const servicePromise=fetch('https://b11a11-server-side-tofashish527.vercel.app/services').then(res=>res.json())
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
            <Newsletter></Newsletter>
            <Review></Review>
        </div>
    );
};

export default Home;