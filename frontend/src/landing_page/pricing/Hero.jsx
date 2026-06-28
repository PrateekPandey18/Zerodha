import React from 'react';
function Hero() {
    return (  
    <div className="container">
     
      <div className="row p-5 mt-5 border-bottom text-center " >
        <h1 className="">Pricing</h1>
        <p className='text-muted fs-5 mt-3'>Free equity investments and flat 20 intraday and F&O trades</p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-5">
            <img src="media/images/pricingEquity.svg" alt="" />
            <h1 className='fs-3 mb-2'>Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
            <img src="media/images/intradayTrades.svg" alt="" />
            <h1 className='fs-3 mb-2'>Intraday and F&O trades</h1>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
            <img src="media/images/pricingEquity.svg" alt="" />
            <h1 className='fs-3 mb-2'>Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>

      </div>
      <div className='row'>
        <h3 className='text-muted'>Disclaimer</h3>
        <p className='fs-small text-muted' style={{fontSize:"13px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
    
     );
}

export default Hero;