import React, { Component } from 'react';
import logo1 from '../../images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (1).png';
import logo2 from '../../images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30.png';
import phone from '../../images/Group 756.png';
import cart from '../../images/Group 758.png';
import map from '../../images/Group 753.png';
import adidas1 from '../../images/Group 346@2x.png';
import cart2 from '../../images/Path 772.png';
import Wishlist from '../../images/Path 771.png';
import Login from '../../images/Path 773.png';
import { Link, NavLink } from 'react-router-dom';
 
import {DataContext} from '../Context/Context'
class Navbar extends React.Component {
    state = {
    }
static contextType = DataContext;


    render() {
        // let {noneMyCart} = this
        let { MyCart } = this.props;
        const {Cart} = this.context;
        // console.log
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light navbar-y">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img className="mr-3 img-fluid" src={logo1} alt="" /><img src={logo2} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <span className="nav-link ">&lt; Valentine’s Day Offers! Buy Two Get One Free <Link to="/">Shop Now <span className="sr-only">(current)</span></Link><span className="mr-3"> &gt; </span></span>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active active-y">
                                    <Link className="nav-link" to="/"><img className="img-fluid mr-2" src={phone} alt="" />Contact Us <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active active-y">
                                    <Link className="nav-link" to="/"><img className="img-fluid mr-2" src={cart} alt="" />Track Order <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active active-y">
                                    <Link className="nav-link" to="/"><img className="img-fluid mr-2" src={map} alt="" />Find A Store <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* ================================================================================== */}
                <nav className="navbar navbar-expand-lg navbar-light navbar-y2 mt-1">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <div className="Search position-relative">
                                    <input type="text" className="pl-5 input-y form-control" placeholder=" Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span><i className="fas fa-search"></i></span>
                                </div>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active adidas1">
                                    <Link className="nav-link" to="/"><img className=" mr-2" src={adidas1} alt="" /><span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active active-y-2 cart2 ">
                                    <Link to="/Cart" className="cart nav-link">
                                        <span>{Cart.length}</span>
                                        <img className="img-fluid mr-2" src={cart2} alt="" />Cart <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item active active-y-2">
                                    <Link className="nav-link" to="/"><img className="img-fluid mr-2" src={Wishlist} alt="" />Wishlist <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active active-y-2">
                                    <Link className="nav-link" to="/"><img className="img-fluid mr-2" src={Login} alt="" />Login<span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* ================================================================== */}
                <nav className="navbar navbar-expand-lg navbar-light navbar-y3">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-nav-3">
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">Men<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">Women<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">Unisex<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">Kids<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">Best Sellers<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3" to="/">New Arrivals<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active navColors active-y">
                                    <NavLink activeClassName="navColor" className="nav-link nav-3 bvb" to="/">Offers<span className="sr-only">(current)</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;