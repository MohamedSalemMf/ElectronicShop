import React, { Component } from 'react';
import Footer1 from '../../images/Group 1436.png';
import Fas from '../../images/Group 1432.png';
import ink from '../../images/Group 1435.png';
import ins from '../../images/Group 1433.png';
import tr from '../../images/Group 1434.png';

import cash from '../../images/Rectangle 586.png';
import visa from '../../images/Group 1437.png';
import card from '../../images/Group 1438.png';
import nasv from '../../images/Group 1439.png';



class Footer extends React.Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footer-bg">
                        <div className="container">
                            <div className="Footer py-3">
                                <div className="row pt-2">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 position-relative pr-4">
                                        <div className="mb-4">
                                            <img className="w-25 " src={Footer1} alt="" />

                                        </div>
                                        <div className="dic-footer">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
                                            <p> m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </p>
                                        </div>
                                        <div className="border-bot"></div>

                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  pl-5">
                                        <div className="Subscribe mb-4">
                                            <h5>Subscribe to our newsletter</h5>
                                        </div>
                                        <div className="inputSubscribe position-relative" >
                                            {/* <input type="email" className="EnterMail" placeholder=" Enter Your Mail" /> */}
                                            <input type="email" className=" EnterMail form-control" placeholder=" Enter Your Mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            {/* <span className="px-3">Subscribe<i className="pl-2 far fa-paper-plane"></i></span> */}
                                            <button className="px-3 btn">Subscribe<i className="pl-2 far fa-paper-plane"></i></button>
                                        </div>

                                        <div >
                                            <div className="row mt-4 ">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                                                    <div className="About-Contact">
                                                        <div>About Us</div>
                                                        <div>Contact Us</div>
                                                        <div>Track Order</div>
                                                        <div>Terms & Conditions</div>
                                                        <div>Privacy Policy</div>
                                                        <div>Sell With Us </div>
                                                        <div>Shipping And Returns </div>
                                                    </div>

                                                    <div className="border-bot2"></div>

                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="About-Contact2">
                                                        <div><a href="/"><img className="mr-2" src={Fas} alt="" /></a>/YESHTERY</div>
                                                        <div><a href="/"><img className="mr-2" src={ink} alt="" /></a>/YESHTERY</div>
                                                        <div><a href="/"><img className="mr-2" src={ins} alt="" /></a>/YESHTERY</div>
                                                        <div><a href="/"><img className="mr-2" src={tr} alt="" /></a>/YESHTERY</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-bot3"></div>

                                <div className="yeshtery2021 mt-3">
                                    <div className="allrights 	">
                                        <div className="">
                                            © 2021 yeshtery, all rights reserved.
                                        </div>
                                        <div className="mt-1">
                                            <a href="/"><img className="mr-2 img-fluid" src={cash} alt="" /></a>
                                            <a href="/"><img className="mr-2 img-fluid" src={visa} alt="" /></a>
                                            <a href="/"><img className="mr-2 img-fluid" src={card} alt="" /></a>
                                        </div>
                                        <div className="nasv">
                                            <span className="mr-2"> Powered By</span><img className=" " src={nasv} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </footer>

            </React.Fragment>

        );
    }
}

export default Footer;