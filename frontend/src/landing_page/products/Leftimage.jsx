import React from 'react';
function Leftimage({imageURL,productName,productDescription,tryDemo,learnMore,GoogolePlay,AppStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageURL} className=''/>
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={GoogolePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={AppStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Leftimage;