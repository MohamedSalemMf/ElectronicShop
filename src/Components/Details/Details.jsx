import React, { Component } from 'react';
import { DataContext } from './../Context/Context';
import Slider1 from '../../images/Group 575@2x.png';
import CartAds from '../../images/Group 1441.png';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Slr1 from '../../images/Group 333@2x.png';
import Slr2 from '../../images/Group 331@2x.png';
import Slr3 from '../../images/Group 329@2x.png';
import Slr4 from '../../images/Group 335@2x.png';
import adidas1 from '../../images/Group 346.png';
import Aro360 from '../../images/Group 338.png';
import man1 from '../../images/Group 354.png';
import man2 from '../../images/Group 356.png';
import Products from './../Products/Products';


class Details extends React.Component {
    static contextType = DataContext;
    state = {
        Product: [],
        index: 0,
    }
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.Products;
            const data = res.filter(item => {
                return item.id === this.props.match.params.id
            })
            // console.log(data)
            this.setState({ Product: data })
        }
    };
    componentDidMount() {
        this.getProduct();
    };
    MyExit = () => {
        // window.alert("Hello");
        $("#aside").fadeOut(500);
    };

    handleTab = (index) => {
        // alert (index);
        this.setState({index: index})
    }
    render() {
        // console.log(this.context.Products)
        // console.log(this.props.match.params.id)
        const { Product } = this.state;
        // console.log(Product)
        const { Cart } = this.context;

        let { MyExit } = this;
        let { index } = this.state;
        
        return (
            <>
                {Product.map(item => (
                    <div className="details" key={item.id}>

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                                    <div className="containerSlider">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                                                    <img className="img-fluid Aro360" src={Aro360} alt="" />
                                                    {/* <!-- slides --> */}
                                                    <div className="carousel-inner">

                                                        <div className="carousel-item active"> <img className="img-fluid" src={item.src[index]} alt="" /> </div>
                                           
                                                    </div>  <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="prev-icon"><i className="fas fa-chevron-left"></i></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="next-icon"><i className="fas fa-chevron-right"></i></span> </a>
                                                    
                                                    
                                                    <ol className="carousel-indicators list-inline">
                                                        {item.src.map((img , index)=>(
                                                            <li  onClick={() => this.handleTab(index)}  key={index} className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img className="img-fluid" src={img} alt="" /> </a> </li>
                                                                       
                                                        ))}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pl-5 ">
                                    <img className="img-fluid mr-2" src={adidas1} alt="" />
                                    <div className="Adidas1r">
                                        <p className="">Adidas black t-shirt lorem ipsum dolor sit<br /> amet, consectetuer adipiscing elit.</p>
                                        <div>Men</div>
                                    </div>
                                    <div className="mt-1 prntStar">
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="far fa-star"></i></span>
                                        <span className="mx-2 of5">4.9 of 5</span>
                                        <span className="Rates">22 Rates</span>
                                    </div>
                                    <div className="prices">
                                        <span className="price1">{item.price}</span  >
                                        <span className="ml-4  price2">9,999 LE</span>
                                        <span className="price3 ml-3">30% Off</span>
                                    </div>
                                    <div className="hr1">
                                        <hr />

                                    </div>
                                    <div className="Size">
                                        <h5>Size</h5>
                                        <div className="d-flex allSize">
                                            <div>Small</div>
                                            <div>Medium</div>
                                            <div>Large</div>
                                            <div>X Large</div>
                                            <div>XX Large</div>
                                        </div>
                                    </div>
                                    <div className="hr1">
                                        <hr />
                                    </div>
                                    <div className="Color">
                                        <h5>Color</h5>
                                        <div className="d-flex allColor">
                                            <div><img className="img-fluid" src={man1} alt="" /></div>
                                            <div><img className="img-fluid" src={man2} alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="hr1">
                                        <hr />
                                    </div>
                                    <div className="Quantity">
                                        <h5>Quantity</h5>
                                        <div>
                                            <div className="d-flex allQuantity">
                                                <button onClick={() => this.context.reduction(item.id)} className="button1">
                                                    <div>-</div>
                                                </button>
                                                <div >{item.count}</div>
                                                <button onClick={() => this.context.increase(item.id)} className="button1">
                                                    <div>+</div>
                                                </button>
                                            </div>

                                            <div className="d-flex allCart my-3">
                                                <div>
                                                    <button className="buttonStore ">Pickup From Store</button>
                                                </div>
                                                <Link to="/Cart" className="cart">
                                                    <div>
                                                        {/* <button className="buttonAddCart ">Add To Cart</button> */}
                                                        <button onClick={() => this.context.addCart(item.id)} className="buttonAddCart ">Add To Cart</button>

                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr1">
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Products />
                        {/* <h1><div className="SliderLE"> {item.price} </div></h1> */}
                    </div>

                ))}

            </>
        );
    }
}

export default Details;