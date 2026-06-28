import React from 'react';
function Universe() {
    return ( 
    <div className="container mt-5">
            <div className="row">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 p-3">
                        <img src="media\images\smallcaseLogo.png" />
                        <p className='text-small text-muted'></p>
                </div>
                <div className="col-4 p-3">
                        <img src="media\images\smallcaseLogo.png" />
                        <p className='text-small text-muted'></p>
                </div>
                <div className="col-4 p-3">
                        <img src="media\images\smallcaseLogo.png" />
                        <p className='text-small text-muted'></p>
                </div>
            </div>
        </div>
    );
}

export default Universe;