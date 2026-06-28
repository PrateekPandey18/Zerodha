import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <Leftimage imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices" tryDemo=""learnMore=""GoogolePlay=""AppStore="" />
        <Rightimage imageURL="media/images/kiteconnect.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
        <Leftimage imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo=""learnMore=""GoogolePlay=""AppStore="" />
        <Rightimage imageURL="media/images/kiteconnect.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
        <Leftimage imageURL="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo=""learnMore=""GoogolePlay=""AppStore="" />
        <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <Universe/>
        </>
     );
}

export default ProductPage;