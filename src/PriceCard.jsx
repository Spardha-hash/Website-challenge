import React from 'react'

const PriceCard = () => {
    return (
        <div>
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "images/card1.png"} alt="" className="card-img-top"  />
                                    <div className="card-header">
                                        <p className="header_name">METAL</p>
                                        <h1 className="header_name-a" >2.15%</h1>
                                        <div className="content">
                                            <button type="button" className="button">5%</button>
                                            &nbsp;&nbsp;
                                            <p className="content_name">cash back</p>
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <div className="card-body-content">
                                            <p><strong style={{fontSize:"20px", color:"rgb(47, 170, 47)"}}>2235</strong><span style={{fontSize:"14px", fontWeight:"bold"}}>/2500 </span> spots</p>
                                            <p style={{fontSize:"12px",marginTop:"10px",marginLeft:"115px"}}><strong>265</strong> spots left</p>
                                        </div>
                                        <div className="progress">
                                            <div className="bar"></div>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-primary bts">Sign Up Now</button>
                                        </div>
                                        <div className="card-list">
                                            <h1 className="card-list-heading">INCLUDES</h1>
                                            <ul className="table-list">
                                                <li>Charcoal Black Metal Card</li>
                                                <li>2.15%1 Bonus Rate Checking Account</li>
                                                <li>5% Cash back on brands you love</li>
                                                <li>Free Cash Withdrawals</li>
                                                <li>Phone & Chat Support</li>
                                            </ul>
                                        </div>
                                        <p>Fund your account with a minimum opening deposit of <strong>$1000.</strong> 3 additional free ATM withdrawals per month from out of network ATMs.</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-content">
                                            <div className="symbol">
                                        <img src={process.env.PUBLIC_URL + "images/dollar.png"} alt="" width="20px" height="20px" marginLeft="-20px"/>
                                        &nbsp; &nbsp;
                                        <p><span style={{textDecoration: "line-through"}}>$11.99/m Membership Fee</span></p>
                                        </div><p style={{marginLeft:"30px"}}><span style={{color:"green"}}><strong style={{fontSize:"20px"}}>Free for 6 months</strong>
                                        &nbsp; &nbsp; &nbsp;
                                            ~$72 Savings</span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                
                                <div className="card" style={{background:"#e2e8f0"}}>
                                <img src={process.env.PUBLIC_URL + "images/card2.png"} alt="" className="card-img-top"/>
                                    <div className="card-header" style={{background:"#e2e8f0"}}>
                                        <p className="header_name">PREMIUM</p>
                                        <h1 className="header_name-a" >1.65%</h1>
                                        <div className="content">
                                            <button type="button" className="button">4%</button>
                                            &nbsp;&nbsp;
                                            <p className="content_name">cash back</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="card-body">
                                        <div className="card-body-content">
                                            <p style={{marginTop:"10px"}}><span style={{fontSize:"14px", fontWeight:"bold"}}>2000 </span> spots</p>
                                            <p style={{fontSize:"12px",marginTop:"10px",marginLeft:"170px"}}><strong>2000</strong> spots left</p>
                                        </div>
                                        <div className="progress">
                                            
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-primary bts" style={{background:"gray", border:"none"}}>Up Next</button>
                                        </div>
                                        <div className="card-list">
                                            <h1 className="card-list-heading">INCLUDES</h1>
                                            <ul className="table-list">
                                                <li>Free Debit Card</li>
                                                <li>1.65%2 Bonus Rate Checking Account</li>
                                                <li>4% Cash back on brands you love</li>
                                                <li>Free Cash Withdrawals</li>
                                                <li>Phone & Chat Support</li>
                                            </ul>
                                        </div>
                                        <p>Fund your account with a minimum opening deposit of <strong>$500.</strong> 2 additional free ATM withdrawals per month from out of network ATMs.</p>
        
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-content">
                                            <div className="symbol">
                                                <p><img src={process.env.PUBLIC_URL + "images/dollar.png"} alt="" width="20px" height="20px"/></p>
                                                &nbsp; &nbsp;
                                                <p><span style={{textDecoration: "line-through"}}>$6.99/m Membership Fee</span></p>
                                            </div>
                                                <div >
                                                <p><span style={{color:"gray"}}><strong style={{fontSize:"25px", marginLeft:"30px"}}>Coming Soon</strong>
                                            </span></p></div>
                                            </div>
                                            
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                
                                <div className="card" style={{background:"#e2e8f0"}}>
                                <img src={process.env.PUBLIC_URL + "images/card3.png"} alt="" className="card-img-top" />
                                    <div className="card-header" style={{background:"#e2e8f0"}}>
                                        <p className="header_name">BASIC</p>
                                        <h1 className="header_name-a" >1.15%</h1>
                                        <div className="content">
                                            <button type="button" className="button">3%</button>
                                            &nbsp;&nbsp;
                                            <p className="content_name">cash back</p>
                                        </div>
                                    
                                    </div>
                                    
                                    <div className="card-body">
                                        <div className="card-body-content">
                                            <p style={{marginTop:"10px"}}><span style={{fontSize:"14px", fontWeight:"bold"}}>10000 </span> spots</p>
                                            <p style={{fontSize:"12px",marginTop:"10px",marginLeft:"150px"}}><strong>10000</strong> spots left</p>
                                        </div>
                                        <div className="progress">
                                            
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-primary bts" style={{background:"gray", border:"none"}}>Coming Soon</button>
                                        </div>
                                        <div className="card-list">
                                            <h1 className="card-list-heading">INCLUDES</h1>
                                            <ul className="table-list">
                                                <li>Free Debit Card</li>
                                                <li>1.15%3 Bonus Rate Checking Account</li>
                                                <li>3% Cash back on brands you love</li>
                                                <li>Free Cash Withdrawals</li>
                                                <li>Phone & Chat Support</li>
                                            </ul>
                                        </div>
                                        <p>Fund your account with a minimum opening deposit of <strong>$1000</strong>. 3 additional free ATM withdrawals per month from out of network ATMs.</p>
        
                                    </div>
                                    <div className="card-footer">
                                        <div className="card-footer-content">
                                        <div className="symbol">
                                        <p><img src={process.env.PUBLIC_URL + "images/dollar.png"} alt="" width="20px" height="20px"/></p>
                                        &nbsp; &nbsp;
                                        <p>No Membership Fee</p>
                                        </div>
                                            <p><span style={{color:"gray"}}><strong style={{fontSize:"20px", marginLeft:"30px"}}>Free Forever!</strong>
                                            </span></p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
            
        </div>
    )
}

export default PriceCard
