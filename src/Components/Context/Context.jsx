import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        Products: [
            {
                "id": "1",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 20,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/2.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/4.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/3.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/2.jpg?2533",
                ],
            },
            {
                "id": "2",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 8.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/5.jpg?3777",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/3.jpg?3777",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/2.jpg?3777",
                ],

            },
            {
                "id": "3",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 7.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                ],
            },
            {
                "id": "4",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 5.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/986132/1.jpg?3126",

                ]
            },
            {
                "id": "5",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 20,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/2.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/4.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/3.jpg?2533",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/24/517691/2.jpg?2533",
                ],
            },
            {
                "id": "6",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 7.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/303722/1.jpg?0413",
                ],
            },
            {
                "id": "7",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 8.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/5.jpg?3777",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/3.jpg?3777",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/157822/2.jpg?3777",
                ],

            },
            {
                "id": "8",
                "dac": "1-Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "price": 5.999,
                "count": 1,
                "src": [
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/986132/1.jpg?3126",
                    "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/986132/1.jpg?3126",

                ]
            },


        ],
        Cart: [],
        total: 0,
    };

    addCart = (id) => {
        const { Products, Cart } = this.state;
        const check = Cart.every(item => {
            return item.id !== id;
        })
        //   console.log(check);
        if (check) {
            const data = Products.filter(Product => {
                return Product.id === id
            });
            // console.log(data);
            this.setState({ Cart: [...Cart, ...data] })
        }
        else{
            alert("The Product Has Been added to cart...")
        }

    }

    
    reduction = id =>{
        // alert("reduction");
        const { Cart } = this.state;
        Cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -=1 ;
            }
        })
        this.setState({Cart: Cart});
        this.getTotal();
    };
    increase = id =>{
        // alert("increase");
        const { Cart } = this.state;
        Cart.forEach(item =>{
            if(item.id === id){
                item.count += 1;
            }
        })
        this.setState({Cart: Cart});
        this.getTotal();
    };

    removeProduct = id => {
        if(window.confirm("Do you want to Delete this product.?")){
            const {Cart} = this.state;
            Cart.forEach((item,index) =>{
                if(item.id === id){
                    Cart.splice(index,1) ;
                }
            })
            this.setState({Cart: Cart});
            this.getTotal();
        }
        // alert(id)
    };

    getTotal = () => {
        const{Cart} = this.state;
        const res = Cart.reduce((prev,item)=>{
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})

    }

    render() {
        const { Products, Cart ,total } = this.state;
        const { addCart , reduction , increase , removeProduct , getTotal} = this;
        // console.log(Products)
        return (
            <DataContext.Provider value={{ Products, addCart , Cart , reduction , increase , removeProduct , total , getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

