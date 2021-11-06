import React, { Component } from 'react';
import { DataContext } from './../Context/Context';
import Slider1 from '../../images/Group 575@2x.png';
import CartAds from '../../images/Group 1441.png';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Products from './../Products/Products';


class Cart extends React.Component {
    static contextType = DataContext;
    state = {

    }


    MyExit = () => {
        // window.alert("Hello");
        $("#aside").fadeOut(500);
    }

    componentDidMount(){
        this.context.getTotal();
    }
    render() {
        const { Cart } = this.context;
        const { reduction, increase, removeProduct ,total } = this.context;

        let { MyExit } = this;

        if (Cart.length === 0) {
            return (
                <>
                <h2 className="text-center">Nothings Product</h2>
    
               { <Products />}
            </>
            )
         
        } else {
            return (
                <>
                    <aside id="aside" >
                        <div className="MyCart">
                            <div className="boxMyCart p-3">
                                <div onClick={() => MyExit()} id="Exit" className=" Exit"><i className="fas fa-times"></i></div>
                                <div className="">
                                    <div className=" MyCart1 text-center">My Cart</div>
                                    <div className="CartSummary pt-3">Cart Summary</div>
                                    {Cart.map(item => (
                                        <div className="Cart" key={item.id}>
                                            <div className="boxImgText mt-4">
                                                <div className="align-items-center cartImg justify-content-center d-flex ">
                                                    <img className="" src={item.src} alt="" />
                                                    <div className="cartText ml-3">
                                                        <p className="p1">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
                                                        <p className="p2">Quantity: 1</p>
                                                        <div className="align-items-center d-flex justify-content-between containerRemove">
                                                            <div className="LE">{item.price * item.count}</div>
                                                            <button onClick={() => removeProduct(item.id)} className="btn Remove">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" d-flex justify-content-center">
                                                    <div className="d-flex allQuantity my-3 ">
                                                        <button onClick={() => reduction(item.id)} className="button1">
                                                            <div>-</div>
                                                        </button>
                                                        <div >{item.count}</div>
                                                        <button onClick={() => increase(item.id)} className="button1">
                                                            <div>+</div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="cart-button mt-3">
                                        <button className="btn Review">Review Cart</button>
                                        <button className="btn Complete">Complete Checkout</button>
                                    </div>
                                    <div className="Total text-center mt-3">Total: {total}</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    { <Products />}
                </>
            );
        }

    }
}

export default Cart;