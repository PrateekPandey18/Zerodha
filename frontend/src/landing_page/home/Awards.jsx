import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ipsam provident aperiam laudantium fuga repudiandae ipsa veniam voluptatem necessitatibus est.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPO's</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Governments</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Awards;