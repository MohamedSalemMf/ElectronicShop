import React, { Component } from 'react';

import { DataContext } from './../Context/Context';

import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import Slider1 from '../../images/Group 575@2x.png';
import Aro360 from '../../images/Group 338.png';
import adidas1 from '../../images/Group 346.png';
// import Products from './Products';

class Products extends React.Component {
    static contextType = DataContext;
    // Slider
    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
    }

    onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
    }

    render() {
        // Slider
        const responsive = {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1024: {
                items: 4
            }
        };
        const { Products } = this.context;
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="Similar">
                            <h2>Similar Products</h2>
                            <p>You may like these products also</p>
                        </div>
                    </div>
                </section>
                <section className="my-5">
                    <div className="container ">
                        <div>
                            <AliceCarousel
                                duration={400}
                                autoPlay={true}
                                startIndex={1}
                                fadeOutAnimation={true}
                                mouseDragEnabled={true}
                                playButtonEnabled={true}
                                responsive={responsive}
                                autoPlayInterval={1000}
                                autoPlayDirection="rtl"
                                autoPlayActionDisabled={true}
                                onSlideChange={this.onSlideChange}
                                onSlideChanged={this.onSlideChanged}
                            >
                                {Products.map(Product => (
                                    <div className="yours-custom-class p-2 " key={Product.id}>
                                        <Link to={`/Product/${Product.id}`}>
                                            <div className=" p-2 ctSlider">
                                                <div className="SliderCar">
                                                    <img className=" Aro360-2" src={Aro360} alt="" />
                                                    <img className="img-fluid" src={Product.src} alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                                    <div className="SliderLE"> {Product.price} </div>
                                                    <div className=" ofs50 d-flex	justify-content-between align-items-center">
                                                        <div className="ofs9">9,999 LE</div>
                                                        <div className="ofs5">50% </div>
                                                        <img className="img-fluid mr-2" src={adidas1} alt="" />
                                                    </div>
                                                    <div className="d-flex mt-2	justify-content-center align-items-center">
                                                        <div className=" mr-3 prntStar2">
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="far fa-star"></i></span>

                                                        </div>
                                                        <span className="mr-2 of45">4.9 of 5</span>
                                                    </div>
                                                    <div className="cartPickup d-flex justify-content-center align-items-center">
                                                        <div className="Pickup mr-2">Pickup From: </div>
                                                        <div className="Genena"> Genena Mall</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <button onClick={()=>this.context.addCart(Product.id)} className="buttonAddCart my-3">Add To Cart</button> 
                                    </div>
                                ))}
                            </AliceCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Products;