import React  from "react"
import PriceCard from "./PriceCard"
const Home =() => {
    return (
        <>
            <section id="header">
                <div className="container-fluid nav_bg mt-5">
                    <div className = 'row'>
                        <div className = "col-11 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 mt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="heading"><strong>The Most Powerful Checking Account</strong></h1>
                                &nbsp;&nbsp;
                                <p style={{color: "grey", fontSize:"23px"}}>Our checking account gives you higher returns than a savings account with no hidden fees.</p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <form className="d-inline-flex p-2 lg:px-1 w-100 p-3 h-20 bg-white border border-solid border-slate-gray border-opacity-50" style={ {borderRadius : "12px" , height : "80px"}}>
                                    <div className="w-3/4 flex mt-2">
                                        <img src={process.env.PUBLIC_URL + "images/email.svg"} alt="" />
                                    </div>&nbsp;&nbsp;&nbsp;
                                    <input type="text" required="required" placeholder="Enter Email Address" className="h-full w-75 input" />
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button type="button" class="btn-primary" style={ {width : "150px", fontWeight : "bold", borderRadius : "12px", height : "53px", padding:"5px",display:"inline-block"} }>Join Now</button>
                                </form>
                                
                                <div className="d-inline-flex p-2 w-75 p-3 h-20">
                                    <img src={process.env.PUBLIC_URL + "images/createaccount-homeaddress-flag@3x.png"} alt="" width="30px" height="20px"  />&nbsp;&nbsp;
                                    <p style={{fontWeight:"bold" , color:"grey"}}>271 spots left for Priority Access</p>
                                </div>
                                <div className="d-inline-flex p-2 w-75 p-3 h-20">
                                    <img src={process.env.PUBLIC_URL + "images/US-FDIC-Logo.svg.png"} alt="" width="70px" height="30px"  />&nbsp;&nbsp;
                                    <p style={{fontWeight:"bold" , color:"#d0cbcb", fontSize:"13px", marginTop:"-2px"}}>Banking Services Provided By 
                                    Evolve Bank & Trust; Member FDIC</p>
                                </div>
                                
                            </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={process.env.PUBLIC_URL + "images/juno-mobile-app@3x.png"} alt="" width="500px" height="700px" />
                        </div>
                        </div>
                        
                        </div>
                    </div>
                     
                    <div className="" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p style={{fontSize:"20px", wordSpacing:"2px",letterSpacing:"5px", marginLeft:"485px"}}>BACKED BY THE BEST</p>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <div className="row">
                                <div className="col-md-4 mt-3 d-flex justify-content-center flex-column">
                                    <img src={process.env.PUBLIC_URL + "images/sequioa-image@3x.png"} alt="" width="200px" height="25px"  />
                                </div>
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "images/polychain-capital@3x.png"} alt="" width="180px" height="70px"  />
                                </div>
                                <div className="col-md-4 mt-3">
                                    <img src={process.env.PUBLIC_URL + "images/consensys-logo@3x.png"} alt="" width="200px" height="50px"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className="row">
                        <div className = "col-11 mx-auto">
                        
                        <div className="row">
                            <div className="col-md-7 pt-5 pt-lg-0 order-1 order-lg-1" style={{marginTop:"100px"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <h4 style={{fontWeight:"bold", color:"#555fd8"}}>Start saving for a rainy day fund</h4>
                                <h1 className="head"><strong>Use Our Checking Account to Achieve Your Financial Goals</strong></h1>
                                <p style={{fontSize:"20px", color:"grey"}}>With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our banking partner Evolve Bank and Trust. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <img src={process.env.PUBLIC_URL + "images/juno-apy-215.svg"} alt="" width="500px" height="700px" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-6 mx-auto">
                        <h1 className="head"> <strong>Sign up early to save more</strong></h1>
                        <p style={{fontSize:"22px", color:"grey"}}>Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</p>
                    </div>
                </div>
                <div className="section">
                    <PriceCard />
                </div>
                
            </section>
        </>
    );
};

export default Home;
